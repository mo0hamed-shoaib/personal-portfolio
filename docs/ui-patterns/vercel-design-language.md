In October, together with Glenn, Henry, and Alasdair, we shipped [a new homepage for Vercel](https://vercel.com/home). Our north stars for the design were performance, constraint in visual flair, and opportunity for bridging different pages aesthetically. Yet, I wouldn't describe the page as minimal as we made use of different motifs like grid lines and pixelation, but rather an exercise in constraint and tranquil beauty. For instance, if an animation or interaction didn't perform well, felt pompous, or out of rhythm relative to the page, we didn't build it.

We anticipate conceptually trivial elements of an interface to gratuitously entertain and afford us with yet another masterpiece of an interaction. Naturally, we celebrate the minutiae of visual finesse to a degree that folks outside the rabbit hole don't relate as intensely to.

But what elements of an interface are largely universally experienced? The page speed, legible typography, information honesty, layout stability and scannability, accessible focus states, auditory feedback, and sensible DOM ordering. Alas, primitives such as performance and accessibility are not as glamorous or fruitful to obsess over — because seemingly, they are invisible, and thus are trivial to trade off when it comes to shipping quickly. Truthfully, I would much rather spend time on polishing that animation spring over tracking down what made the initial load so slow. But is having a slow website with immaculate attention to visual craft desirable?

We are proud to have struck a balance in shipping a website that feels reflective of our collective taste, yet doesn't nervously exhibit itself through artificial gimmicks. In this essay, we'd like to share said taste, convictions, and some technical implementation details.

### Aesthetic Foundation

The new homepage is a sum of many parts. This year, Basement created our own typeface family. The goal was for beautiful, Swiss inspired design with optimisation for displays; chiefly to be used on our interface, documentation and code blocks. Icons are a often a precursor to text, so we also designed our own iconography set to pair with it. Add in a significant upgrade of our design system to supply us a wealth of new interface solutions, and there were three new common components to roll out across the site.

![Various user interface icons are displayed in a 1 to 1 aspect ratio formation.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcons.7063d4de.png&w=3840&q=75)

It felt apt to use these and chart ourselves new territory at the same time. What would pair best with a Grotesque sans-serif? We looked at the history of the Swiss design movement and fell in love with the raw exposure to the creation of design; blocks, grids, modularity. At its core Vercel is an infrastructure for frameworks, so the metaphor of showing a literal frame on every page became a hallmark to rally around.

![Three Swiss design posters with grids, big typography, and blocks.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInspiration.199489db.png&w=3840&q=75)

At the same time, Vercel is about speed. Having a consistent grid position across all pages as a user navigates through helps the user see what content swaps out, and how quickly. It lessens the appearance of a pseudo “layout shift” happening between views, and highlights incredible performance of server rendering. With this in mind, we dabbled with a set of early ideas about how the “hero” could capture this rigidity but still allow creativity. The pitch to [@rauchg](https://twitter.com/rauchg) ended up being a series of ideas that will come to life in the following months:

![A concept website for Vercel. The sentence "say goodbye to your slow app" is displayed on a grid with each word descending in row position.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGoodbye.9985a97b.png&w=3840&q=75)

What came out of this ideation is a signature hero, and set of columns to act as content guides for the rest of the page. To help guide the eye at certain points, we opted for crosshairs inspired by traditonal print center marks. At 1080 wide, the grid also helps each column of 360 have a readable line-length for 14-16px text. Given the modularity of everything being a block, it also collapses nicely into mobile. This empowers our design and engineering teams to roll out pages with a strong identity, consistency and speed.

Combined with the slightly curious prompt of "What will you ship?", we related to representing the full spectrum of the color wheel in the hero gradient as a metaphor for creativity.

![The Vercel home page in light and dark mode in 3 viewport sizes: 1440px, 1024px, and 400px.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHome.6c255c2f.png&w=3840&q=75)

As the design of this project commenced directly after [@rauchg](https://twitter.com/rauchg)'s Figma Config 2023 talk, we also made use of Figma’s new variables feature throughout the entire system. This meant content div sizing, column sizing, inner paddings, and margins between sections were all set up to adapt when dragged between desktop, tablet and mobile size classes.

Color variables are also rife throughout — we adopted [@kevvy](https://twitter.com/kevinrupert)'s new Vercel color system, optimized for accessibility, as color variables. With these new tools, the entire team can see pages adapted to dark mode at different sizes in seconds, rather than minutes.

---

### Grid System

After the initial designs were signed off we very quickly recognized the pivotal role of the grid and knew its foundation would be a key to our success. It was imperative for us to craft a grid system that seamlessly combined performance, responsiveness, and a strong DX while offering a suite of out of the box defaults to cater to common layout needs. We wanted to create a grid system component that could be used to build out entire pages of grid based layouts:

```
{/* The system is only rendered at the root of the page */}
<Grid.System guideWidth={1}>
  <Grid columns={3} rows={3}>
    {/*
      Each cell can contain arbitrary JSX, and will render
      grid lines automatically
    */}
    <Grid.Cell column={1} row={1}>1</Grid.Cell>
    <Grid.Cell column={2} row={2}>2</Grid.Cell>
    <Grid.Cell column={3} row={3}>3</Grid.Cell>
    {/* Crosses can be set between the intersection of cells */}
    <Grid.Cross column={1} row={1} />
    <Grid.Cross column={-1} row={-1} />
  </Grid>
</Grid.System>
```

The actual implementation of this component turned out to be anything but straight forward. The first significant hurdle emerged when it came to a crucial design element of the grid—drawing grid lines. Drawing guides even for a simple grid is an incredibly non-trivial task. The most common method involves bordering every child in the grid on two adjacent perpendicular sides, such as the right and bottom sides. Assuming every cell in the grid is filled, the result will have properly drawn guides but will lack the top and left borders on the grid itself. To address this issue, we can simply add a top and left border on the grid and voila, we have a grid with guides.

```
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 50px);
  border: 2px solid #666;
  border-right: none;
  border-bottom: none;
}

.grid > div {
  border: 2px solid  #666;
  border-left: none;
  border-top: none;
}
```

For simple grids, this method works well. However, it quickly falls apart as soon as you begin to stray away from this basic model. For example, a major drawback of this method is that it requires every cell to be filled in the grid. For the above grid the markdown looks like this:

```
<div className="grid">
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
</div>
```

We don't always want to explicitly define and fill each cell with content. The grid component already knows how many rows and columns we want from props, so it should just render the guides regardless of how many cells are actually given as children. So how can we draw guides around non-existent cells and ensure proper behavior when cells extend across multiple rows or columns?

Faced with this challenge, I eventually stumbled my way across a CSS property that is incredibly useful for this exact circumstance: `display: contents`. After learning about this property it really felt like I had discovered a hidden gem. This property causes an element's children to appear as if they were direct children of the element's parent, ignoring the element itself. You might be wondering why this is so useful, so let's work through how we can implement a React component that generates the guides for a grid given a set of rows and columns. First lets define the skeleton of our component:

```
interface GridProps {
  rows: number;
  columns: number;
  children: ReactElement<GridCellProps>[];
}

function Grid({ rows, columns, children }: GridProps) {
  return (
    // ...
  );
};
```

We know that there are 3 main parts at play here. The parent grid element, the children of the grid, and the grid guides. The first step is to create the parent grid element and pass along our rows and columns as CSS variables:

```
function Grid({ rows, columns, children }: GridProps) {
  return (
    <div className="grid" style={{ "--rows": rows, "--columns": columns }}>
      {children}
    </div>
  );
};
```

Next, we need to render the grid guides. We can do this by creating a `div` with a class of `grid-guides` and rendering it as a direct child of the grid. Inside of this div, we will want to create `rows * columns` number of elements to fill our grid. Lastly, we just need to apply`position: relative` to the `grid` class, and `display: contents` property to the `grid-guides` class. This will render the children of the grid-guides `div` as if they were direct children of the grid. However to ensure that these children don't interfere with the actual children on the grid, we need to apply a `position: absolute` and `inset: 0px` to every guide cell.

```
function Grid({ rows, columns, children }: GridProps) {
  return (
    <div className="grid" style={{ '--rows': rows, '--columns': columns }}>
      <div className="grid-guides">
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              className="grid-guide"
              style={{ '--x': x, '--y': y }}
            />
          );
        })}
      </div>
      {/* Cells will render here */}
      {children}
    </div>
  );
};
```

```
.grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  border: 2px solid #666;
  border-right: none;
  border-bottom: none;
  position: relative;
}

.grid-guides {
  display: contents;
}

.grid-guide {
  inset: 0px;
  position: absolute;
  grid-column-start: var(--x);
  grid-column-end: span 1;
  grid-row-start: var(--y);
  grid-row-end: span 1;
  border: 2px solid #666;
  border-left: none;
  border-top: none;
}
```

And with that, our basic component is done! Notice how we no longer need to define any cells to receive guides. Let's see what it looks like in practice. Feel free to edit the number of columns or rows:

```
() => <Grid rows={5} columns={5} />
```

Now that we have our main Grid component done, we can move onto creating a simple React abstraction for grid cells. Take a look at the following:

```
interface CellProps {
  row: number;
  column: number;
  children: ReactNode;
}

function Cell({ row, column, children }: CellProps) {
  return (
    <div
      className="grid-cell"
      style={{ gridRow: row, gridColumn: column }}
    >
      {children}
    </div>
  );
};
```

This component is incredibly simple, but it allows us to easily render arbitrary JSX inside a cell on the grid by specifying the row and column of the cell and that is it!

```
<Grid rows={4} columns={4}>
  <Grid.Cell row="auto" column={1}>
    What
  </Grid.Cell>
  <Grid.Cell row="auto" column={4}>
    will
  </Grid.Cell>
  <Grid.Cell row={2} column={3}>
    you
  </Grid.Cell>
  <Grid.Cell row={3} column={4}>
    ship
  </Grid.Cell>
  <Grid.Cell row={4} column="auto">
    ?
  </Grid.Cell>
</Grid>
```

One very cool thing to note here is that passing the "auto" prop as a row/column is working here. If we were not using `display: contents` on our guides, setting "auto" as a row/column would break the grid entirely.

Another component to use with the grid is a cross which has the same API as the cell—you specify the row and column for which the cross appears:

```
<Grid rows={4} columns={4}>
  <Grid.Cross column={1} row={1} />
  <Grid.Cross column={-1} row={-1} />
</Grid>
```

Because the crosses are simply absolutely positioned relative to the specificed cell, they can be placed not only on the edges of the grid, but on any column and row combination:

```
<Grid rows={4} columns={4}>
  <Grid.Cross column={1} row={4} />
  <Grid.Cross column={2} row={3} />
  <Grid.Cross column={2} row={4} />
  <Grid.Cross column={3} row={2} />
  <Grid.Cross column={3} row={3} />
  <Grid.Cross column={3} row={4} />
  <Grid.Cross column={4} row={3} />
  <Grid.Cross column={4} row={4} />
  <Grid.Cross column={5} row={4} />
</Grid>
```

At it's core, this is how we constructed our grid component for use on all our websites. Hopefully one could see how this component could be extended to support more advanced features such as cells that span multiple rows or columns, or responsive behaviors, i.e. setting the rows and columns to different values at different breakpoints. Additionally, this component and solution can be entirely server rendered since the component doesn't rely on client-side API-s at all.

### Hero Composition

The hero visual is composed of multiple stacked layers of CSS, SVG, and progressively a shader. It does not rely on any client side code to display the essence of it, such as rendering a `canvas` element. The reason why this is important is to have a fast initial paint on the screen for something so crucial and center stage.

In descending order, the layer stacking order looks something like this:

1.  Heading
2.  SVG triangle
3.  CSS grid lines
4.  SVG rays
5.  CSS rainbow gradient
6.  GLSL shader

![6 stacked layers of an interface are placed on a 3D plane at a 14 degree angle: shader, gradient, rays, grid, triangle, and heading.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fisometric.5d3d803e.png&w=3840&q=100)

With layering we can progressively enhance the hero with a GLSL shader that gracefully fades in after the page has loaded. The async nature of the shader also allows us to code split it, perform light hardware detection to not render it at all on low powered devices while still retaining the core of the visual.

### Visual Rhythm

Using an accent color for call-to-action buttons and other important elements has become an industry standard. If every element made repetitive use of a strong accent color, the color would no longer feel as significant.

For a consistent rhythm, we not only made deliberate effort not to overuse the grid and cross aesthetic. Subconsciously, we also made use of white space for a consistent rhythm in animation. When every element on a given section is signalling itself as novel or attractive, the novelty is diminished.

For example, consider this map of highlighted sections that either respond with motion to input or move independently. Orange sections signal high novelty, like the graph tooltip animating a long distance or icons pixelating on hover. Blue sections represent low novelty micro-animations like floating cursors or scaling icons on hover.

![The entire Vercel home page is displayed in two columns. Sections with high motion novelty are highlighted in orange, and sections in low motion novelty in blue.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FComparison.4352d137.png&w=3840&q=75)

Scrolling through the page creates a consistent pattern of featuring an interlude following each animation segment. In this graphic, high novelty animations never appear consecutively between sections, but may be paired with lower novelty animations.

### Pixelated Iconography

One of the most beloved parts of the home page were the pixelated icons. They are drawn in Figma, and extracted with a Ruby script that takes bitmaps as input, reads the pixel color at set intervals, and then creates a matrix for each icon ([source](https://twitter.com/almonk/status/1712091228953579810/photo/1)). One of the matrices would look like this in code. Can you tell what framework logo this is for?

```
[
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
]
```

The fact that we have icons available as pixel data means we can render them in different formats.

For example, on the home page we render a `canvas` element for a smaller DOM footprint and animation. As a fallback, we make use of a base64 string to display a placeholder image which ends up costing merely ~1kb per icon. Optionally, the icon can also render as SVG for when they are above the fold.

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAC30lEQVR42u1bO3LjMAx9UtJmRi4ySpncIDfyOdLlCHsE5Rh7i72BW7uKirQepbDpOLCwAEh4ImbwGs6IwIM/AAWAJBAIBEy4X/fv/eZhncaf5musCv0GjwBGjIdxtyr7AqV8rdliBwAYT2MpCvlurAp3OzwDzUvz9zB+/Cv7/N58LDhftfqwF0+COgY4X7X6sBdPgj4GOgBzvso9vzbPEeoY4HzV6sNePGpYfZKT9+Ixo9/0Uz/176XyXjwUcgx0ACzrMyfvxUMgxkDyTa1PcvJePBS3EtF+ajuMmLQ/3HbAAAD36/YPxuZ1j8OYnmuhtSu+B9L6bM1RSnMcrV3/GKB6pfoC3GOA6uWu61q74j+wn2CKAapXqi/JRQyIeqX6AqqPAff3QFr/z9b94dvzNx2P1S6LyIW8eQiqz4XUkPJzWtNKY64dCnNNzK3LdN2XRonnejWxNK8dc+0QmGtizifpui+NEo/W99UuRPN7OmrXd2++7L6Q1qevzZffF6KjFU582X0hrU9fm4/NhS589JibbN8ucpzMfP//fBc1NRMTbAxwPkp9s7Re4Pi0McHHQAdA45vccwkSn2T3CDYGOB8tzXEkPa3dC1hzlaXInWJAW8MuTe4rBjoAllxlIXKnGNDWsEuTa5NPpT7Mdtg97VbbgfshpH4P5Usj5+Pa/lH6XJSv8drj4ua175Fc+63bHhc3b5U32r/x2uPi5rXvkVz7rbWHKcnTeau81X7EgDhvlTfarz4Gbs/2tL7l4Vz+nfL4PebrAMqX5M7yfhNfwqk+IHVE5EI/LVd9LsRC29PMPdMg8WnrhKiJoyZm+LQ1MdsXmtnjmu3X5O5lJT1t/4lD9EajN+rEJyL2yGKPbB7V75GJiHOjzjwUcVZCKx/nRhnEmTlRr1RfQPVn5uLcqKQXMSCg+hiIc6Na+ciFGFSfC6kRdymdeRLiLuXi71JSxJ16Z764U1/NnfpA4JfiE/ncjUvGOa71AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII=)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADsklEQVR42u1bMW4bQQwcyWkCRMC5EJQy+YF/pDZfSOcn+AnyM9LlCckL3EpVrnBryEV0Kdaihtwd7jmApiFg75InHOeOnOPeIBnr7ernp2+r8ePdZfv8u87/IvsHbJ7wBcCI8bI93Nb5X2b/AAwAgJHaStxkX//qgDtg8X3x47J9/lXnX34H1tvNn83T5+1kX44YMOLIbLnPG0/OAW/Oqzih58AAwJPzzDoh54A351WcaL4DtTnv5QSL38wBVc7XcqGdAwMARc5blqCZA6qcr+XCh+gFr7fLB4yL+xec7HH5N3dx3u4fsTttvWjX2/P72fWEORDNee/z3PKr58AAIOF53o0D0Zz3Ps8tvzIO/Mv9eM67sN+d58IUd/94fp+bA9l1PYtj+fVzYACQWNfTOAbcHMiu61kcyy/lQEXuN8HigrWecqBX7rO49RwYAPTIfRbXAOVAr9xnccMcYLkffd6/qaFw+flexrX8mhxguR/N+ejzvZ0DAwBlzkf9ONeZHGC5H8356PPdywHzDli96n53+Hq43e+8F856Zav3LddZ/sMcUOU+85vHgSgsP8yvM26YA6rcZ37lHPDmfqs2asW34rk50NrbRntoPQe8KPdFbTC+mwOtvW20h26uhby1yIRo7WTpQJYfK66MA9HaSaUv6ThQrmf72XpnfBkHorWTSl9q5oCVs6xfmHpfEE6kc6BXzZTHgXIdWx/1Q/w1c6BXzZTGgVLHqdWHLD2o+3vg/WijA4Ca90AryrjEr/w90FsbdfcD7LtttF9gft5NT2z5jdZW8/XEll/vOrI+vSe2/EZrK5kuFJ3nmVD2yMxPGgeu2qjXj3Pdf6+Numshs3c1dH42U8FqpvTvA60973zvActG9zM411dzoLXnVb0H3ByYcpbqOWSOyNsvpOlCKu2TIU8bLf8etV4494X7AZX2yZCmjbLeVfY9OVsbzZqh6NcTl/+3bBRBP9U9cdYMhWxeiOUg40JUH2LfF6x9V230qo0SP920UaBxfqiydpJ/J/ZC9R7Rfyf2ovRvWQL5d2IvVO8RmTbqhXeGwqu1zqaNqmqo+bRRZp2YTRtNP0dm6fRRLkTnh6IzedWz01nzQ1GO1c9Oe2Htb/V7QvXsdNb8UJRj9PyAVaNYs9BvbNKZmwmy8wPZOpEF3fmBWtsI2fmBbJ3IAuVAVAdS60QM8nNk2TlfQn+OjFkx5OfIep+1cZ+ljM64ZeV8ieoz9XOdLytRf6Z+ADBDzpeoPlM/1/myEq+waoQlioEYBwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMBKrE/0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDBj9qtBAAAAAElFTkSuQmCC)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADRUlEQVR42u2bMW4bMRBFP3e3DUAXRtocwU3Oo859SnfODdwpcCUdw5cIfIOktLot0kqbYvMXCCPucMihlCB8zRj2iuJa/w1HgAQ0Gv837n4zPbmxfzzifN3u5wtvN90TRvd4xHp9268/oXYdaX/u/hs+ABgxnq/PN/NC74XrWA836zegXUfaXwcPAG6MVuIBAKNYJbTrCPvrPx5wB0wP/cv5+vV1XufdAXeAe3Av6/XH6/r+tetI++tO08ljHKZY5RMfJ3iMmKQqvQDadaT9NQeaA4UODKdp8m4cpiPOV/bh7Q47ALjddHNWcb6yz4fnwdL/p/XHv+3n51n6v7A/0QErF6yzn+6AlQvG2U92wMoF6+wnnwNW54F1/08+B5oDzQHhHPiyW/pulfNgmfON+//21/WO/6FaLqRWbfa5j06bOXWmK2Wfl/f8oZYLqVWbfe5j4A1IM1GuC1LVZp+V+1Y7YO2CNvvlDli7UPj8agesXdBmP+pA6nkQZlDq71LVOsj+/4cDWheu5cBzMGN1CPnbHQjow19c+jzI7f9kCG+g1mxkNfuEOESo7UJp9kmHGNpMegAXzD7pY3+o7UJp9smACLVmo9LZJ6TYAa0LpbNPSLkDrL89rt7sE1LsgNaF0tknJOpArdmI1+XOPiEOAtbngVX/Jx0kPHBVBwR66QLr88Cq/5MBAlazkdXsEyI6QEpdsM4+kR0gHihyIXcdAdEBUuqCdfaJ6ADJnY0A29knxNyBWIatZp8QewdYrR8fwdyBWIatZp+QZAdyZyNiNfuEJDtAcvu4df8n6Q4QD1R1QEmyAyS3j1v3f5LsANHORstn3IxmnxC1A0Tb162zT/QOEA+o+rpUM1E7QLR93Tr7JPsVSP0sg/azGFqaA82BQgfU5wDRzkbW/Z9kO0BKXcjNPsl3gHjgGtkn2Q6QUhdys0+yHSC5LpRmnxQ7QGq955Uod4B44JLZJ8UOkFrveSXMXoFLzT4hzYEFDzQHMig+B0jqeWDV/4mZAyT1OzlW2DlAPHCJ7BMzB0jqd3KsMHOAxFywzj4xd4CELlhnn9g7QDxQM/vVb6D75L5jPH1m/eduoNbsE9IciOKB5kCj0Wg0GgI/ATMCDH2CJoL1AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII=)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAC80lEQVR42u2cPY7bQAyFn7TbBtAWhlMmN8iNfI50OUKOoD1GbpEbbCtXUZF24RRZKsAIBH9EidzAryFgD8cU5n32aDTjDk6dLv13zN23V8TE6dlXR+e9gPMLPgGYMcfE65Ovjt57ARgAAHNYdOrBm/jhii9A97X7ERN///TVoR6B0+X86/zy8ULx9YYBM25Rse1fW5eagWjPRzGhZ2AAEOl5KSqlZiDa81FMiCOwl+e1TEj1iQwc7X0rCzIDA4Ajvd9GQSIDR3vfygI7Alnet7LAMpDtfS0LPAPkwSqREctAtve1LKxGoIr3tSysGKjmfYmFNQNZHtfGRisGqnlfYmEZgarel1hYGKjufY6Ffwxke9vJwsJAde9zLCwjkO1ta7wzkB7/FwYelzXOW//XY9DF6Rnj27WPAHC6HJtPdXde77dzEms/W/Mp9mHz86Pz3+KD1/vtnMTaz9Z8iv3W72HSNF4/X5+m0ZvvrSOMAauX6zFg9bI3r4lhDFi9XI4BkpaFNq8MAySp37oMaD1tbc/EcAZIUr9lGSBJLLTtyzFA4vqvzwBJm++sYzcGSFz/5RkgcSy07coyQGo/5/0wQJLynXXszgCp/ZxyDEjPsloW2vfTGaB+tHOkegxwr2vbOesIvyfWzpHKMaB9rksscPnpDET9TuQxwL0vyVnHbutCW38n0hiw7vfh8tMZiLpvyGOAa8fJWcfua6Nb7xvSGLCyUJYBLQt1GeDaW/OZeNjzga3rSGkMWOdIZRnYi4Xjn5FJMtZx+DOyaBZ6r/e85wmiWKB2aXslop4v5O2VkKTMT9srEfV8IW2/0FYWqF36fiEvC/kMNF5mJeSl7xfysrBiwPt7cDQL7bpSmb3T3jXVOnunJTHtyuyd9q6prkagOgvt6+XO0FjXVOudoTGq3Bka65oqOwJVWWhV9ixl3HniAUBhFsqepQw7T5zFgnYE7mfqyzNAqnbPTHrUXsA0btvvbz1PoNX9v1Wy5kCkd//fKn8A3JjINVwwsv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADOElEQVR42u2cMW4bMRBF/+6qCRABdCEoZXID30itr+AuR8gR5GOkyxGcE7iVqmzh1lCKaARn1gOSw+FQAvibgaRdDhect8MdcjXhrM1u/evzw3p+/Q1Xkd9P9zo7UEPbF3wFMB/vfC+A/GLW2fHSUgAAzL7df+dXaSdqZ33EPTA8vj779p/8Dj91dtzstn+2L192bycEzDjRZ68LIL9aO0gx6MVCOQMBwEcx5iXJf6KdpBj0YqGUgdVhjz0AbHbjv9jCeGZh/IF5+H54qnsB5B/42PJ+cbvIA61YkBRjZJkHuG0tqV9nu8gDrViQFGPkMgKH/fHb8e6w5/dZ77xA4vlJzAP8xGthITU/jIszA4BrYEHqB7MTP+9aWEjND4sRaM2CFPtSvwapoVYsxPzy30expQCgBQsxv+z7SWqnFQsxv/x3cQS8WYjFPh2XzADJi4VUP+kMkAIADxZS/bDfJ0TkxUKqn2QGSLVZSI19UjYDpFos5LabzwApAKjBQm677LgoA6RaLOS2m80AyZqF3NgnqRkgWbGgbUfPACkAsGBB2w47PpkBkhUL2nb4eavcCyitI9Fxb6f/zz88XepBSf5xrhtlM0CyiuHSfJLPACkAMIjh0nySzQDJKoZL84l6BHLzgva+H5OaAZJ2Hm81l9IzQAoAFPN4q7mUmgGSdh5vNZfKzgNcPC/w+3npfT+mYgZI0jpz7WfqcgZIAYBj7JOKGSBJ68y1n6mLGSC9m6MAqB/7JDMGuLzqSXYMcAUADvUkMwa4vOpJZgyQvGKfZM6A97qCPQMBgOO6gjkD3usKZiOQOt+3Xl8wnwulPhdc71yIW+k4I5nPhVKfC6yYKB6B3Ni3Xl/oz8T9mfg5zx+XegRy6zy11tp6bbTXRr1ro6U1zlIW6DiyfY2sr5EVMpQ8Atb1fS0Lfa9E3ytR2G42A7XWtki5LPQ9c33PXKGfZAZqxz5XKgt973Td7if4Zd/f/N7pxfqAd32fK7Yfiferv0NTTVI/mL35d2guDLSOfS6Jhf4upbukfp3tzb9LuWod+xf/EOwpwkDr2O/v1LeOffN36r3v+7EYj9n+3yrFIr9Ke/P/rfIXa4FSonSio1kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAB8UlEQVR42u2bMVIDMQxF5d09wHIDjkDDedKlp6SDG9CFoUqOwSUYbgAtnS+QdYqwGWIirB3JNp75v1GBiKyJHujvrB0ptV6FJ+f7hz0d42Znm5+SUzfwQddE5Mkf48uVbX5KnbYBGomInD9F6/zcDXR37pP89DhH6/zsDUxhGskPYY7W+SmBATBQuwEwAAa0H1CZgSGVEO8uv2IIo/ND2NMxWuendqUkA/HMlo4pRtIjNBKdzWzpmFCfSrj9ohuicN+/1olv73+fj2XgNJvRzJaO8zk4FlgGas++lAWegXgWa0dGLAO1Z1/KAj9Cxt51qaT1xQxod5bFDQjryxkoLWF9tgHrnWWppPXZBqz39qWS1gcD2SSsDwZyCQyAAaWk9QfWk0Y+oHQDk9A7O+neX5sBLnZW3tRcwnP10r0/5U2tJT1XF/+95WLpL0B6LjCQTcJzNc/A8Lyl7ffvnMX16n/9H9jsLp8Tu1A2Ces3vwvBD+QSGAADSoEBMKAUGAADWgnrN88AngvlEjxxK54Yz4VyCQy0wgCeC+USdqFWdiH4gVwCA2BAKTAABpQSe2LuB1JPmi0KPTnenca708p3p1kGZp8Q+4LS8YcPuCjcocEdGqUX119FxJ16XX3cpax9lxL3icGAUmAADIAB7QdUZuAA/s1DwSCVn0oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADbklEQVR42u1cMZLbMAxcSW4yE8/oCo9TJj+4H7nNF9LlCfcE3zPS5QnJC66Vq6i41uMrIioTKDgABKixL9wGM0eApEe7EgmC1yEIu8P2+/vP2/Hdvc4+/4wZt4n6AfsnfAQwYtTZ013MuG3UD0APABjVNghdVEfbE+6B5kvzTWeff8SMu7EG7A7tA8bm6xnEXtoeIy5n6CzXz/Bom49ZA1auW61VG3YN9AAsXLdaI8wasHLdaq3aUGtg5qyS68MjjlPocYo3aUOrBbUGvO/5Ut8JvQZ6AB4ue+MZqDXgfc+X+k6IGuC4L3Gc9mON12pB1ADHXYnj3natFmQN9AByOO5t5/wIRA1w3JU47m3XaoF9ArvD/tf+6cPhfMFvbk52OJ4+ne6GI+dH2xPS35NfiuPaOT8KVgNR3Jf69WqB10APIIL7Vn/tuBNYDURxX+rXq4XFE9ByP4H6SQ9A8rdqYaEBKwejNWCdx1IDPQDL+1jrZ/VXzmOhASsHozVgncf8BKzcT4jWQIJWC7MGctcipTSgndcfDfQActbla/uTuFkDuWuRUhrQzmveD7yyXgegzwexfkb/tA8Yjq/vN1gNePe00fkhbn68Bihoe2krjT+B1YB3TxudH+Lmx2pgwU1j7tNrpfFFDVy71X8HrtVKGrh2O2tAm/OU8ji0XbJSvJRLTfNutNz37oUpor47bfR7WQ1r/4zttNz37oUpor47G477/+D0X+Dey1pI8WkNBEETzVr7AG88N89WzXkKq783nplnt9Y+wBvPzXMj7QM4lNYABbcvaHK5vLYGuLg2m8u5cd54EtflcnltDXBxrTWvk5Ab542ncVUDVQPRGpDOpBLW1gCXu61roboWcq6FFhqgWuA0UVoDdHxunnVPXPfE3j0xt8625irFcwHrOYEyT1VzozU36s2Nph9grWkrbbU1efWMrJ6RlT4jo+e1MOb5Hf6Y/B9cZ2S1ViLan8TdfK3E/ARy6zZL1Qtp65dqzVytmVP2K9bMJVi1EK0Ba+1erZ0O14B23Alvr3Y6QasF6V5AgnTPILdutd6hYf287Zwfwc3foRHvkXF5I21NW4I1D6Q9r653KbM1Yo1n8PbvUiZoc6jeulMt9xPqnfri+SAB/8+d+gRtfsia+wRs3E+o/1tlRg+gINc53Pz/VnkB7JjhIDX6zO0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg==)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAACyElEQVR42u2aPY7bMBCFn2S3C2gLQymTG+yNfI50OUKO4Bwjt8gN3NrVqth2oS0WVOBRBvPDkekA85oBZPFRNt8nkpKBVCqVSqVSqZRbh+P4Op6/HFtfh1vjeZzHeXxt1X9f7TAAAKZWX2BXa/B0xQvQfX/70+YLuEegZP99xoAJcysWOm/D8YyvACZMt/X6fN8v4GdgAABMq3pnuRko2e9+39Z7s2AeAZp9Wq0s1LJjZoDLvpeF4udlx87AAOBf2afV6ueUmQEu+14WaucR8wjQzF9O12/X58uJHpd8ouaRagZKdrnjWh/vPFLPgHRc66NtR1TNQMkud1zr451H1CNAM1uyXz6nLHCZjp5H1AxoMy6dFz2P6BkYAGiyKp1HP+eqUmoGtBmXzoueR9QjoL3PS+dFzSNFzRnwziPmEdiMAas/UXMGvPOIWuW+7F3nczWqP5EBbzal+72XISqZgQFAzTqfq0H9iQx4synd770MUe2lC3mf+8/7M3rT/flywgkADsfb9pdfn8ej+tuMAW/7x2HA2954/mYMeNtbz2dHQFr/a2Vd42j3FUUsA7XZr/XRtuMZGABEPPP0+ijbsQxErU2i5hGuHTsC3vV5lI+2XTIgyuujbPffM7CSd/3fymfFQOvsW33WDAwAWmbf6LNioHX2rT7LCHDPLL0/3FY+lIWFgej3vlsxQP3+MjAAiHzvu5UP8VsYiH7vuxUD1G/ZE9O9qLR35XQ49j8xdT+Kn9eniNtbl89ZBlpnX+vLM+BVlI/Sl2Wgdfa1vvvozHqfI0miLJTr7qIzuxUDnH8fntloP8F/F53ZzZ7zM/57mtmFCTirkiV3P+R6O+17W2v1/lfCWnt2rVFbJQX1s9O+t7VW738lrHXPrTW8VZ39OaYfcT/wqNnX7wesVVJwP+J+4FGz3+q/2qlUKpVKpVKpVCqVSj2KPgDHbmu5ilAEPgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMBKrE/0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDBj9qtBAAAAAElFTkSuQmCC)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADLUlEQVR42u1bO7LbMAxcyW4zw1d4nDK5QW7kc6TLEXIEvWPkFrnBa+UqKtJ6nMJDZUIFAUCAH2e0DYqnJ6yHuxIBUAOUOF3Gr1iGLzeUifOrjs+g/QHnN3wAsGApE68vOj6j9gcgAACWYlGJg/Yf3l3xCRg+D9/KxJ/fC63A6XL+cX57f7ndEbDgXirGPFJeYg+U1n6uF+QeCABKaj+NQog9UFr7Vi+QiJpMo9PtzXlYD1Da1z6vS+XhPRAAODyvS+VhPUBp302jxjzkClDP/Xm6fry+zJMvfSDeV/teID1QS/vWvLQHAoAa2jfmJT1QS/vWvJsVqK39FFovbDzQSvu5PLYeCABaaD+Tx8YDrbSfy2NdgdbaTyH1wuqBXrSfguP12wMBQA/aT8HwWj3Qi/ZTcLyO8cLbfXxoDY84v2JqS/2BeXrwOF3+5Bf/TnqgtfZTUPxoD/QGgh/pgdbaT0HxW1cgfd62JpyC4rd7oBoIfrsHamH3QHMQ/J7eA+ReiJqFaWdYWpAzuLtyL+Q1w9JCy4OvB9JYGkoebD3QS1+I4jFqZ1+l5wNaHkPu7KvWfICLY615LotMHofc2Vet+QAXj+nz9S818QRsa9L4vLa+F9bn/l2XP8ZB2g8q1Tey5h/FGpdep4Ux/0HaDyrVN7LmP0r7QVx/JhfW/IO2DvCuG6z5R7Wmtdd73y+5/qCtA7zrBmv+UVsLe9fO1vy7B2z0M+6XXP//eYDa71P7desCWPPveyHrCux7IWqPsenPFJqhWfOr+0K91MT5faEYvZGZX90X6qUm3vRGKS3+o1Z2hTQ/2RuN4LTYb280IgCoqX1t/oSH+LxQr73RpwF1plr9DU0r8DOy3hEASDzQK9g5ce9g58S9Y/dAazytB7havHsPyM+N9ooAQLMX6g3ic6NekH5vzM3WBLMzAAU84HXmIv/7ASsCAI+aWvh/7h7w2s+rvx+wwuvMhfY7BjcPeJ258PuOTIsAQNPXiVF6HwJuHvA6c6Htwbq9B6gzF1y09mCbe8D6vmjvAS4yaO4B6/vCzQPa3iYXpT3YZnshr/lDu70QF4Vothfy6n3+AiHYpxKci8rjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII=)

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAACSElEQVR42u2WPU7EMBSEJ5scwNyAI9BwHjp6Sjq4AR0SHcfgEogbQEuXC7ChWK0RDsZ+f3GifdOMlMKR9eZ7Y8Dlcrlcp6zO6uDrq+mhG/u7Lxz88XlrF3jHOYAR48Gfzmz+s7O6AAIAdGN0I5ldYHfTfWDc3x99cxfYT/uAcZiObvUfZyCrADgDFRq0D4z7f5pCNw7TFw5+/K7dB+oMpNlPXZsF/QgF4Ff2U1dWr33g5ScugOm2f/nbX990/6c+gXT/W/eBMzBTAJwBgtR6ILf/U9fuAzUGStm3YkGPgQD8m/3UlaTGQCn7ViyoTaC0/636wBmICoAzwJC4B2r3v1UfiBmgZl+bBTkDASBlP3WhxAxQs6/NApsBbva1WWAzIM2+Fgt8BgIgyn7qTLEZkGZfiwX2BKhvH6u3kTPgDAgZIPeA1v7X6gMyA9rZl7JAZyAAqtlPnSgyA9rZl7JAnoD2/pf2gTPgDAgZqO4Bq/0v7YNqBqyzz2WhnoEAmGY/9UpVM2CdfS4L1ROw3v/cPnAGnAEhA8UeWGr/c/ugyMDS2aeyUGYgAItmP/WCigwsnX0qC1kGWmWfykKWgdbZr2Uhz0CaxdaeUZaB1tmvZSE7gaXfPty3kTPgDAgZmPXAWvZ/bR/MGFhb9ksszBlonXUiCzMG1pb9EguzCbTe99Q+cAacASEDsQfWuv9LfRAZWHv2cyz8MNA620wWIgNrz36OhTiB1vud2wfOgDMgZGDYyv7P9UG3teynvmueZaH3W8t+6nC5Tlzfs25uKnwS/loAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg==)

The approach to rendering based on the matrix is pretty much the same between formats. For instance, the way we render them in `canvas` is by iterating over each row and pixel, and drawing a circle with `arc()` for a given coordinate:

```
matrix.forEach((row: number[], y: number) => {
  row.forEach((pixel: number, x: number) => {
    // 0 means transparent, no need to render
    if (pixel !== 0) {
      render(ctx, x, y, pixel);
    }
    // When done, hide the placeholder
    if (y === matrix.length - 1 && x === row.length - 1) {
      setLoading(false);
    }
  });
});
```

The rendering happens very fast but to illustrate what's happening we can slow rendering down. And funnily enough, it kind of reminds me of an old computer monitor painting each frame painstakingly slowly.
And of course, we treat the icons as images so they recieve an `aria-label` for proper semantics and screen readers:

```
<div
  role="img"
  aria-label="Next.js logo"
>
  <canvas aria-hidden />
</div>
```

### Accessible Code Blocks

We invested a lot of care into accessibility and went over the page with VoiceOver dozens of times to make sure we design the website for everyone as best as we could. VoiceOver is a screen reader that helps folks with visual impairements to understand the page and receive auditory feedback of text, images, and any other elements on a given page.

On the home page, we display a block of code. We had a component from our design system to pull in for this. Though, navigating the section together with [@johnphamous](https://twitter.com/johnphamous) we found that the experience could be more deliberate.

A couple of issues that surfaced were:

- The file icon is non-descriptive, it just says "image"
- The copy button does not audibly describe it's purpose nor provide feedback on press
- The line numbers are road blocks of noise and can be confused with being part of the code

Most of the fixes were trivial: we could hide the icon with `aria-hidden` since the file name already includes the file type. And place an `aria-label` on the copy button.

On copying the code, we also want to make sure to provide auditory feedback that the code indeed was successfully copied. We can use [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to expose dynamic content changes to screen readers. In this case, we want to conditionally render a message:

```
<>
  {isCopied && (
    <div
      // We are showing a message, so `log` is appropriate
      role="log"
      // The update is low priority, and should report when the user is idle
      // For compatibility we can explicitly set this
      aria-live="polite"
      // Hide the element visually, but don't
      // use `display` or `visibility` for this
      className="visually-hidden"
    >
      Copied code to clipboard
    </div>
  )}
</>
```

Since the block of code on the given page is complementary, we can also make the tag into an `aside`, and give it a label that describes what the code does at a high level. This way someone could decide to either skip the section or dive deeper:

```
<aside
  aria-label="This is a code block of a React Server Component.
  The component is an async function that reads data directly
  from a SQL function in the render block of the component."
>
  {...}
</aside>
```

The line numbers are self-incrementing pseudo elements. Here's a quick example:

```
.code { counter-reset: line; }
.line { counter-increment: line; }
.line:before { content: counter(line); }
```

Now, since there's no DOM element rendered we can't just throw `aria-hidden` on it. Instead, theres a second value for `content` which is alternative text for pseudo elements. By setting the content to an empty string we effectively are saying that nothing should be announced for this element:

```
.line:before {
  content: counter(line) / "";
}
```

When all of these improvements are combined, we end up receiving more information from a screen reader. And not only for a single page, but for every piece of code that we present as the component powers hundreds of examples.

### Code Driven Visuals

All of the supplementary visuals on the website are built in code without external libraries. We felt that using images is simpler in the short term, but we would get pristine quality, granular control, and true responsiveness by investing upfront into building marketing visuals as React components. We also make use of the same visuals across different pages so being able to drop one in anywhere is clutch.

![Two illustrations are side by side: one showing the Git push deployment workflow, and the other commenting on preview deployments. A third illustration is full width beneath the two. The illustration shows an analytics graph.](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvisuals.2fbebe9d.png&w=3840&q=75)

To be deliberate we make sure to explicitly label visuals to separate illustrative elements from interactive ones. To do so, we treat the visuals as images and label them with a description that describes just enough relevant detail:

```
<div
  role="img"
  aria-label="
  Two abstract window frames are stacked on top of each other.
  The bottom window displays a successful Git push output in a terminal.
  The top window shows a corresponding preview deployment in a browser.
">
  {/* Hide inner tree */}
  <div aria-hidden>
     {...}
  </div>
</div>
```

I mentioned responsiveness earlier. Since [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries) are now stable in modern browsers, we can build truly independently dynamic widgets instead of relying on the window width which is not reflective of how much space a component really has to display itself.

Container queries are really easy to use. We define a containment context on the root element and make any adjustments to the children based on the container size:

```
.root {
  container-type: inline-size;
}

@container (max-width: 560px) {
  .scope {
    display: none;
  }
}
```

Now it's safe to render the component inside any container and predictably assume it will always display the ideal form.

### Orbit Rings

One of the animations on the website shows 3 orbit rings intersecting with icons moving along the rings. There's a really neat CSS property available called [offset-path](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path) that helps translate any arbitrary element on a given path.

What I didn't realise was that the value of this property does not only have to be a SVG path — it can also be its containing bounding box. By setting `offset-path` to `content-box` the element will not only use the parent as its trajectory — it will additionally respect the radius of the parent element.

Here's a tiny example of this property in action:

```
.ring {
  width: 200px;
  height: 200px;
  border: 1px solid #666;
  border-radius: 50%;
}

.ring .ball {
  width: 24px;
  height: 24px;
  background: dodgerblue;
  border-radius: 50%;
  offset-path: content-box;
  offset-distance: 0%;
  position: absolute;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  to {
    offset-distance: 100%;
  }
}
```

As of 2023, sadly `content-box` does not produce desirable results in Safari and Firefox. However, since 12/12 Safari 17.2 has now updated their `offset-path` implementation! I can confirm that using `offset-path: content-box` works well.

Alternatively, we could also provide `circle()` as a value for a similar result but likewise, this does not have [cross-browser support yet](https://caniuse.com/mdn-css_properties_offset-path_basic-shape).

```
offset-path: circle(100px at center);
```

The only workaround I found meanwhile works well for circular trajectories. Basically we can construct a circle as a SVG path from a given size (200px):

```
offset-path: path("M 100 0 A 100 100 0 1 1 100 200 A 100 100 0 1 1 100 0");
```

To make it dynamic, we can create this from a React component that takes a `size` prop.

### Reduced Motion

Animations on the home page will also respect reduced motion, where applicable. Looping complimentary animations get special treatment on the page, and are paused. Interactions are explicit inputs which we don't intentionally reduce since none of them produce any extravagant, amplified effects or movement.

A good example where we can pause is this looping cursor and caret animation:

These are animated with CSS keyframes and we can pause them gracefully by using the `animation-play-state` property, instead of abruptly interrupting the animation by setting it to `none`.

```
@media (prefers-reduced-motion: reduce) {
  .cursor, .caret {
    animation-play-state: paused;
  }
}
```

And finally, a detail that no one sane has any reason to ever notice—we can make sure that the caret blink does not pause in a state where it becomes invisible.

```
@media (prefers-reduced-motion: reduce) {
  .cursor, .caret {
    animation-play-state: paused;
  }

  .caret {
    opacity: 1 !important;
  }
}
```

### Cinematography

For showcasing our work I shot a video and a few stills for use in media or our portfolios. One of them includes practical cinematography of the design. I don't have a lot of sage, creative wisdom to share here how to make a video like this, as I was learning myself while making. It's mostly a painful, repetitive process between shooting, editing, re-shooting and editing again. In the end, I am still not completely happy with it.

I used the Sony A7 III, and Tamron 28-75mm for the lens. Most of the shots were shot handheld with a slow motion setting on the camera. This makes jitter less noticeable, especially when combined with Final Cut Pro's stabilization. I also found it helpful to try and not move the camera with your hands so much, but more so your entire body as if the camera was a part of it.

The camera captures the display of a iPad Pro where the website runs on localhost for any modifications. Sometimes I would remove certain elements for a better scene, like while filming the grid.

I did not capture the website through Safari. Instead, to get rid of the chrome of Safari, two meta tags were useful to add the website in stand-alone mode to the home screen:

```
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

For stills, I got good results with long-exposure photography which made for some really cool overlaying visuals when capturing interactions:

![The dynamic movement of orbit rings is captured in a long-exposure shot, creating overlaying circular rays of color](https://rauno.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forbits.fca49604.jpg&w=3840&q=75)

### Acknowledgments

In no particular order, kudos to everyone else who contributed to the 2023 Vercel Homepage:

- Alasdair Monk
- Elliot Johnson
- Emil Kowalski
- Evil Rabbit
- Genny Davila
- Greta Workman
- Guillermo Rauch
- Hannah Gates
- John Phamous
- Lee Robinson
- Morgane Palomares
- Peri Langlois
- Shu Ding
- Thom Crowe

---

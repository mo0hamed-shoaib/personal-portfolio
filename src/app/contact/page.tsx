"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Invalid email address";
    if (!data.subject.trim()) newErrors.subject = "Subject is required";
    if (!data.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl border-x border-border px-4 pt-16 pb-16">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList className="justify-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Contact</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind? Let&apos;s discuss how we can work
                together.
              </p>
            </div>

            {/* WhatsApp Option */}
            <div className="mb-12">
              <Link
                href="https://wa.me/201140493328"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 border border-green-600/30 bg-green-500/10 p-4 text-green-600 transition-colors hover:bg-green-500/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-semibold">Chat with me on WhatsApp</span>
              </Link>
            </div>

            {/* Contact Form */}
            <div className="border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <FieldSet>
                  <FieldGroup>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <FieldError>{errors.name}</FieldError>}
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <FieldError>{errors.email}</FieldError>
                        )}
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor="subject">Subject</FieldLabel>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && (
                        <FieldError>{errors.subject}</FieldError>
                      )}
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        aria-invalid={!!errors.message}
                      />
                      <FieldDescription>
                        Share as much detail as you&apos;d like.
                      </FieldDescription>
                      {errors.message && (
                        <FieldError>{errors.message}</FieldError>
                      )}
                    </Field>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full cursor-pointer bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      Your inquiry will be sent to{" "}
                      <span className="text-foreground">
                        mohamed.g.shoaib@gmail.com
                      </span>
                    </p>
                  </FieldGroup>
                </FieldSet>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

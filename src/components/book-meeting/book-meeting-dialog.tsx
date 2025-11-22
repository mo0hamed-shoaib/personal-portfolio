"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/animate-ui/components/base/dialog";
import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import { Button } from "@base-ui-components/react/button";
import { toast } from "sonner";

interface BookMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookMeetingDialog({
  open,
  onOpenChange,
}: BookMeetingDialogProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formValues: Record<string, unknown>) => {
    setLoading(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          toast.error(data.message || "Failed to send message");
        }
        setLoading(false);
        return;
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      onOpenChange(false);
      setErrors({});
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup
        showCloseButton={false}
        className="w-full max-w-lg"
        from="top"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Book a Meeting
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        <Form
          errors={errors}
          onFormSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <Field.Root name="fullName" className="flex flex-col gap-2">
            <Field.Label className="text-sm font-medium">
              Full Name
            </Field.Label>
            <Field.Control
              type="text"
              required
              placeholder="John Doe"
              className="h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Field.Error className="text-sm text-destructive" />
          </Field.Root>

          <Field.Root name="subject" className="flex flex-col gap-2">
            <Field.Label className="text-sm font-medium">Subject</Field.Label>
            <Field.Control
              type="text"
              required
              placeholder="Meeting about..."
              className="h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Field.Error className="text-sm text-destructive" />
          </Field.Root>

          <Field.Root name="message" className="flex flex-col gap-2">
            <Field.Label className="text-sm font-medium">Message</Field.Label>
            <textarea
              name="message"
              required
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Field.Error className="text-sm text-destructive" />
          </Field.Root>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              onClick={() => onOpenChange(false)}
              className="h-10 cursor-pointer border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              focusableWhenDisabled
              className="h-10 cursor-pointer bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}


"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormContainer from "@/components/ui/form/form-container";
import FormRow from "@/components/ui/form/form-row";
import FormItemContainer from "@/components/ui/form/form-item-container";
import { Textarea } from "@/components/ui/textarea";
import { inviteSchema } from "@/validators/invite";
import { createInvite } from "@/server/api/invite";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { tossConfetti } from "@/hooks/use-confetti";
import { rsvp } from "@/lib/mail";

const ReservationForm = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof inviteSchema>>({
    resolver: zodResolver(inviteSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      attendeeCount: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof inviteSchema>) {
    try {
      setLoading(true);
      await createInvite(values);
      await rsvp({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        attendingCount: values.attendeeCount,
        message: values.message,
      });
      form.reset();
      toast({
        title: "Success!",
        description: "Your RSVP has been submitted.",
      });
      tossConfetti();
      router.push("/thank-you");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="font-tangerine text-primary md:text-3xl">RSVP</h2>
          <FormRow className="!mt-0">
            <FormItemContainer>
              <FormField
                control={form.control}
                name="firstName"
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <FormField
                control={form.control}
                name="lastName"
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItemContainer>
          </FormRow>

          <FormRow>
            <FormItemContainer>
              <FormField
                control={form.control}
                name="email"
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItemContainer>
            <FormItemContainer>
              <FormField
                control={form.control}
                name="attendeeCount"
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of people attending*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Attendee count..."
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItemContainer>
          </FormRow>

          <FormField
            control={form.control}
            name="message"
            disabled={loading}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message..."
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            Submit
            {loading && <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        </form>
      </Form>
    </FormContainer>
  );
};

export default ReservationForm;

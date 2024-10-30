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

const ReservationForm = () => {
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
    await createInvite(values);
  }

  return (
    <FormContainer className="mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormRow>
            <FormItemContainer>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="First name..." {...field} />
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name..." {...field} />
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Email..." {...field} />
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of people attending*</FormLabel>
                    <FormControl>
                      <Input placeholder="Attendee count..." {...field} />
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </FormContainer>
  );
};

export default ReservationForm;

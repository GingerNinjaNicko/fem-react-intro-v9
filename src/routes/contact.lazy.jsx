import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const { mutate, isError, isSuccess } = useMutation({
    mutationKey: ["contact"],
    mutationFn: async function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  if (isError) {
    return <h1>ERROR!!!</h1>;
  }

  return (
    <div className="contact">
      <h2>Contact</h2>
      {isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form action={mutate}>
          <input required name="name" placeholder="Name" />
          <input required name="email" placeholder="Email" type="email" />
          <textarea required name="message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

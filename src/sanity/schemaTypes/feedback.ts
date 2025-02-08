export default {
    name: "feedback",
    title: "Customer Feedback",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "rating", title: "Rating", type: "number" },
      { name: "comments", title: "Comments", type: "text" },
      { name: "createdAt", title: "Created At", type: "datetime", initialValue: new Date().toISOString() },
    ],
  };
  
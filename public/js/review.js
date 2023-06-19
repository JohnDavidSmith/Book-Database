const sumbitReview = async (event) => {
  event.preventDefault();
  const message = document.getElementById("message").value.trim();
  const bookid = document.querySelector("#bookValue").value;
  console.log(message);
  console.log(bookid);

  if (message && bookid) {
    const response = await fetch(`/api/review`, {
      method: "POST",
      body: JSON.stringify({ message, bookid }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(message);
    if (response.ok) {
      document.location.reload();
    } else {
      alert("failed to create review");
    }
  }
};
document
  .querySelector(".submitReview")
  .addEventListener("submit", sumbitReview);

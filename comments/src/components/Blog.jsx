import React from "react";
import Commnets from "./Commnets";

function Blog() {
    const data={
        id: "001",
        author: "albert",
        body: "Whats the status?",
        timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
        points: "2",
        replies: [
          {
            id: "003",
            author: "haren",
            body: "Wrote the test suites, waiting for approval?",
            timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
            points: "3",
            replies: [
              {
                id: "004",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
                points: "8"
              }
            ]
          },
          {
            id: "002",
            author: "Nrupul",
            body: "looking forward for the demo!",
            timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
            points: "2"
          }
        ]
      };
  // CRUD features

  function getElementById(id,tree){
    let elem={};
    return elem
  }
  // Add comments
  function addComment(comment,data){
    // find id
    // insert into replies

  }
  // Update
  


  return (
    <div>
      <h1>My Comment App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        adipisci, aspernatur debitis esse quod ducimus modi pariatur. Vitae
        corrupti a voluptatem ipsum consequuntur distinctio culpa autem nulla
        excepturi tempora ipsa totam ea earum, maiores quas ipsam sapiente fuga
        soluta! Velit itaque in perspiciatis earum repellat rerum veritatis
        incidunt labore, culpa nulla? Consectetur a recusandae saepe odio!
        Veritatis modi nemo animi molestiae placeat magnam soluta inventore
        sint, saepe consectetur adipisci. Adipisci perferendis minus unde
        consequatur ad quisquam, fugiat, labore odio vel distinctio, hic nisi
        doloremque! Consequuntur, illum. Error ipsum quisquam laborum, aliquam
        fugiat voluptate vero vitae voluptates delectus esse laboriosam minus
        deserunt quam odio officia quibusdam commodi voluptatem, necessitatibus
        illum sunt perferendis officiis corporis possimus! Placeat omnis
        dignissimos cum eos maxime impedit dicta, temporibus iure corporis
        consectetur et autem explicabo illo accusantium aliquid! Nulla maxime
        sapiente ut tempore rerum ipsam illum, vero delectus deleniti quod
        possimus veniam. Repellendus perspiciatis dolorum corporis, quaerat
        officiis, illum vero explicabo unde sequi nostrum ex in expedita
        architecto eius! Voluptatibus iste libero quis neque maiores rerum, quod
        quam, magnam iusto aliquid possimus, ut quia mollitia ad illo itaque
        blanditiis vitae consectetur cupiditate consequatur quisquam labore!
        Nihil labore ab laboriosam numquam tenetur cum id minus quod qui.
      </p>
      <h4>Author:Sharun</h4>
      <h4>Date : 25/FEB/2022</h4>
     <Commnets   data={data}  / >
    </div>
  );
}

export default Blog;

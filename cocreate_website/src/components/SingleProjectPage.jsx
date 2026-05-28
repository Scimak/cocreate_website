import React from "react";
import { Route, useParams } from "react-router-dom";

function SingleProjectPage() {
  // here userParams extracts the projectId variable from the URL defined before as path in Route
  // Must check for undefined before using
  const { projectId } = useParams();
  return (
    <div id="singleProjectPage">
      {/* some fetch code to get all project data based on projectId */}
      <section>
        <h2>Project Name</h2>
        <img
          src="/assets/projectImg.png"
          alt="Project Image"
          title="Project Image"
        />

        <p id="projectDescription">
          Project Description: Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Minima ratione vero ullam impedit odio perferendis
          ea magni accusamus, officiis omnis corrupti eius, molestias labore aut
          culpa quibusdam quo reprehenderit vel. Iure deleniti assumenda dicta
          iusto debitis unde, cumque, et vitae cum eius excepturi harum. Dolorum
          ab sunt nesciunt temporibus. Aut ullam quae dolorem rem quasi, aliquid
          nulla corporis, reprehenderit asperiores, laudantium iusto veritatis
          eius? Officiis at, cupiditate placeat velit dicta repudiandae dolore
          asperiores mollitia voluptatum, inventore earum, vero suscipit ab
          consectetur repellat ducimus porro. Ullam quia dolorum eaque, suscipit
          nobis iusto hic vero, quos magni maxime repudiandae! Et, nemo
          veritatis.
        </p>
      </section>

      <section>
        <h2>Achievements &amp; Related Events</h2>

        <img
          src="/assets/projectImg.png"
          alt="Event Image"
          title="Event Image"
        />
        <p>
          Event Description: Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. A nulla fugit eligendi, iste quis repudiandae quasi magnam sint
          nam autem fuga quidem nemo perspiciatis, voluptatum, accusantium nobis
          eius? Amet asperiores suscipit, officia alias provident impedit
          doloribus dignissimos tempora autem nisi commodi dicta beatae enim
          natus aperiam corrupti harum cum? Numquam tempore, ullam quasi optio
          veniam recusandae nemo corporis voluptatibus quibusdam perspiciatis,
          nam sunt quos reiciendis excepturi inventore commodi laboriosam
          ratione assumenda facilis quaerat ipsam eligendi, ipsa amet voluptate.
          Numquam optio maiores adipisci delectus unde temporibus aperiam
          quibusdam architecto amet doloribus! Rem quam quos aspernatur optio,
          quo voluptatibus repellat tempore minima.
        </p>
      </section>
    </div>
  );
}

export default SingleProjectPage;

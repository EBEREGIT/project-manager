import React from 'react'

const ProjectDetails = (props) => {
    // extract the id of the post from the props passed in by the router
    const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div className="card-action grey lighten-4 grey text">
            <div>Posted by Ebereplenty</div>
            <div>on 11th March, 3a.m</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";



export default function Job({ job, onClick }) {
  
  
  return (    
    
    <Paper onClick={onClick} style={{backgroundColor:"#C0E8F5"}} className="job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h5">{job.company}</Typography>
        <Typography>{job.location}</Typography>

      </div>

      <div>
        <Typography>{job.created_at}</Typography> 
      </div>
      </Paper> 
  );
}

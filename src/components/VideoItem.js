/* import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
                <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />                
            </Paper>
            <Typography variant="h9" style={{ padding: "10px" }}>
              <b>{video.snippet.title}</b>
            </Typography>
        </Grid>
    );
};

export default VideoItem;  */

import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      </Paper>
      <Typography variant="h9" style={{ padding: "10px" }}>
        <b>{video.snippet.title}</b>
      </Typography>
    </Grid>
  );
}
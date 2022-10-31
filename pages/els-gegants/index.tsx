import React from "react";
import Head from "next/head";
import {Avatar, Container, Divider, Grid, Typography} from "@mui/material";

const Index: React.FC = () => {
  return <>
    <Head><title>Els gegants</title></Head>
    <Container maxWidth="md" sx={{mt: 5, mb: 10}}>
      <Typography component="h1" variant="h4" gutterBottom>Els gegants</Typography>
      <Divider sx={{mb: 3}} />
      <Typography component="h2" variant="h5" gutterBottom>Xixilona</Typography>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
            sx={{height: "auto", width: "100%", mt: 2, borderRadius: 0}} />
        </Grid>
        <Grid item xs={9}>
          <p>Vestibulum metus augue, rhoncus vitae risus vitae, lacinia feugiat dolor. Nunc vitae bibendum neque, quis sagittis nisi. Fusce lacinia accumsan nulla eu finibus. Aliquam velit mauris, viverra nec nisl vel, egestas vulputate nisi. Cras iaculis augue fermentum, sollicitudin ante ultricies, tempus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a mauris ipsum. Donec accumsan nisi sapien, ac blandit lorem sagittis vel. Donec sit amet nisi vel libero tincidunt sagittis. Maecenas pellentesque sem in dui tristique, vitae mattis orci tempor. Nulla laoreet finibus neque, quis consequat arcu pulvinar et.</p>
        </Grid>
      </Grid>
      <Divider sx={{my: 5}} />
      <Typography component="h2" variant="h5" gutterBottom>Magí</Typography>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
            sx={{height: "auto", width: "100%", mt: 2, borderRadius: 0}} />
        </Grid>
        <Grid item xs={9}>
          <p>Vestibulum metus augue, rhoncus vitae risus vitae, lacinia feugiat dolor. Nunc vitae bibendum neque, quis sagittis nisi. Fusce lacinia accumsan nulla eu finibus. Aliquam velit mauris, viverra nec nisl vel, egestas vulputate nisi. Cras iaculis augue fermentum, sollicitudin ante ultricies, tempus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a mauris ipsum. Donec accumsan nisi sapien, ac blandit lorem sagittis vel. Donec sit amet nisi vel libero tincidunt sagittis. Maecenas pellentesque sem in dui tristique, vitae mattis orci tempor. Nulla laoreet finibus neque, quis consequat arcu pulvinar et.</p>
        </Grid>
      </Grid>
      <Divider sx={{my: 3}} />
      <Typography component="h2" variant="h5" gutterBottom>Benet</Typography>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
            sx={{height: "auto", width: "100%", mt: 2, borderRadius: 0}}  />
        </Grid>
        <Grid item xs={9}>
          <p>Vestibulum metus augue, rhoncus vitae risus vitae, lacinia feugiat dolor. Nunc vitae bibendum neque, quis sagittis nisi. Fusce lacinia accumsan nulla eu finibus. Aliquam velit mauris, viverra nec nisl vel, egestas vulputate nisi. Cras iaculis augue fermentum, sollicitudin ante ultricies, tempus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a mauris ipsum. Donec accumsan nisi sapien, ac blandit lorem sagittis vel. Donec sit amet nisi vel libero tincidunt sagittis. Maecenas pellentesque sem in dui tristique, vitae mattis orci tempor. Nulla laoreet finibus neque, quis consequat arcu pulvinar et.</p>
        </Grid>
      </Grid>
      <Divider sx={{my: 3}} />
      <Typography component="h2" variant="h5" gutterBottom>Garric</Typography>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
            sx={{height: "auto", width: "100%", mt: 2, borderRadius: 0}}  />
        </Grid>
        <Grid item xs={9}>
          <p>Vestibulum metus augue, rhoncus vitae risus vitae, lacinia feugiat dolor. Nunc vitae bibendum neque, quis sagittis nisi. Fusce lacinia accumsan nulla eu finibus. Aliquam velit mauris, viverra nec nisl vel, egestas vulputate nisi. Cras iaculis augue fermentum, sollicitudin ante ultricies, tempus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a mauris ipsum. Donec accumsan nisi sapien, ac blandit lorem sagittis vel. Donec sit amet nisi vel libero tincidunt sagittis. Maecenas pellentesque sem in dui tristique, vitae mattis orci tempor. Nulla laoreet finibus neque, quis consequat arcu pulvinar et.</p>
        </Grid>
      </Grid>
      <Divider sx={{my: 3}} />
      <Typography component="h2" variant="h5" gutterBottom>Verdet</Typography>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
            sx={{height: "auto", width: "100%", mt: 2, borderRadius: 0}}  />
        </Grid>
        <Grid item xs={9}>
          <p>Vestibulum metus augue, rhoncus vitae risus vitae, lacinia feugiat dolor. Nunc vitae bibendum neque, quis sagittis nisi. Fusce lacinia accumsan nulla eu finibus. Aliquam velit mauris, viverra nec nisl vel, egestas vulputate nisi. Cras iaculis augue fermentum, sollicitudin ante ultricies, tempus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a mauris ipsum. Donec accumsan nisi sapien, ac blandit lorem sagittis vel. Donec sit amet nisi vel libero tincidunt sagittis. Maecenas pellentesque sem in dui tristique, vitae mattis orci tempor. Nulla laoreet finibus neque, quis consequat arcu pulvinar et.</p>
        </Grid>
      </Grid>
      <Divider sx={{my: 3}} />
      <Typography component="h2" variant="h5" gutterBottom>Mussolet</Typography>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
            sx={{height: "auto", width: "100%", mt: 2, borderRadius: 0}}  />
        </Grid>
        <Grid item xs={9}>
          <p>Vestibulum metus augue, rhoncus vitae risus vitae, lacinia feugiat dolor. Nunc vitae bibendum neque, quis sagittis nisi. Fusce lacinia accumsan nulla eu finibus. Aliquam velit mauris, viverra nec nisl vel, egestas vulputate nisi. Cras iaculis augue fermentum, sollicitudin ante ultricies, tempus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a mauris ipsum. Donec accumsan nisi sapien, ac blandit lorem sagittis vel. Donec sit amet nisi vel libero tincidunt sagittis. Maecenas pellentesque sem in dui tristique, vitae mattis orci tempor. Nulla laoreet finibus neque, quis consequat arcu pulvinar et.</p>
        </Grid>
      </Grid>
    </Container>
  </>;
};

export default Index;

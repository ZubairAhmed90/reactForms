import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Grid, Button, Typography, Box } from '@mui/material';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  <>
  <nav style={{backgroundColor:"blue",color:"white", height:"80px",alignContent:"center",padding:"5px" }}>
      <h1 >Zeesoft Academy</h1>
     </nav>
     <h1 style={{textAlign:"center"}}>Admission Form</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px' }}>
      <Grid container spacing={3} justifyContent="center">
        {/* First Column */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            label="Full Name"
            variant="outlined"
            fullWidth
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span style={{color:"red"}}>Full Name is required</span>}
          <br /><br />

          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email", { required: true })}
          />
          {errors.email && <span style={{color:"red"}}>Email is required</span>}
          <br /><br />

          <TextField
            type="text"
            label="National ID (CNIC)"
            variant="outlined"
            fullWidth
            {...register("cnic", { required: true })}
          />
          {errors.cnic && <span style={{color:"red"}}>CNIC is required</span>}
          <br /><br />

          <TextField
            type="text"
            label="Gender"
            variant="outlined"
            fullWidth
            {...register("gender", { required: true })}
          />
          {errors.gender && <span style={{color:"red"}}>Gender is required</span>}
          <br /><br />

          <TextField
            type="text"
            label="Address"
            variant="outlined"
            fullWidth
            {...register("address", { required: true })}
          />
          {errors.address && <span style={{color:"red"}}>Address is required</span>}
          <br /><br />
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            label="Father Name"
            variant="outlined"
            fullWidth
            {...register("fatherName", { required: true })}
          />
          {errors.fatherName && <span style={{color:"red"}}>Father Name is required</span>}
          <br /><br />

          <TextField
            type="text"
            label="Phone Number"
            variant="outlined"
            fullWidth
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && <span style={{color:"red"}}>Phone Number is required</span>}
          <br /><br />

          <TextField
            type="date"
            label="Date of Birth"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            {...register("dob", { required: true })}
          />
          {errors.dob && <span style={{color:"red"}}>Date of Birth is required</span>}
          <br /><br />

          <TextField
            type="text"
            label="Do you have a Laptop?"
            variant="outlined"
            fullWidth
            {...register("laptop", { required: true })}
          />
          {errors.laptop && <span style={{color:"red"}}>This field is required</span>}
          <br /><br />

          <TextField
            type="text"
            label="Last Qualification"
            variant="outlined"
            fullWidth
            {...register("qualification", { required: true })}
          />
          {errors.qualification && <span style={{color:"red"}}>Qualification is required</span>}
          <br /><br />
        </Grid>
      </Grid>

      {/* Profile Image Section */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Box mt={2}>
            <Typography variant="h6">Profile Image</Typography>
            <Button
              variant="contained"
              component="label"
            >
              Choose File
              <input
                type="file"
                hidden
                {...register("profileImage", { required: true })}
              />
            </Button>
            {errors.profileImage && <span style={{color:"red"}}>Profile Image is required</span>}
          </Box>
          <Box mt={2}>
            <Typography variant="body2">
              <ul>
                <li>With white or blue background</li>
                <li>File type: jpg, jpeg, png</li>
                <li>Upload your recent passport size picture</li>
                <li>Your face should be clearly visible without any glasses</li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: "blue", color: "white", marginTop: "20px" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </>
  );
}

export default App;

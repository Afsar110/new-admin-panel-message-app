import React from 'react'
import { Card,  TextField, Typography, Button, CircularProgress } from '@mui/material';
const style={
  width:'20rem',
  height:'25rem',
  margin:'auto',
borderRadius: '20px',

}

const ChangPassCard = ({handleSendClicked, loading}) => {
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [opassword, setOPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const handleSend = () => {
    if(password.length < 6) {
      setPasswordError(true)
      alert("Plese enter atlease 6 charecter");
      return;
    }
    if(password.length !== cpassword.length) {
      setPasswordError(true)
      alert("Password and confirm password should be same");
      return;
    }
    setPasswordError(false)
   handleSendClicked({oldPassword: opassword, password}).then(resp=> {
    if(resp){
      setPassword("");
      setCPassword("");
    }
   });
  }
  if (loading) {
    return (
      <Card sx={{ margin:'auto', p: 20}}>
        <CircularProgress fontSize={30} />
      </Card>
    )
  }
  return (
    
        <Card sx={style}>
            <Typography sx={{fontWeight:600,fontSize:'x-large',display:'flex',justifyContent:'center', mt: 3}}>Change password</Typography>
            
            <Typography  sx={{fontWeight:500,fontSize:'medium',display:'flex',justifyContent:'center',marginTop:'5%'}} >Old password</Typography>
            <TextField type="password" sx={{width: '10rem', display: 'flex', ml: '5px',margin:'auto'}} value={opassword} onChange={event => setOPassword(event.target.value)} variant="outlined"  /> 
            <Typography  sx={{fontWeight:500,fontSize:'medium',display:'flex',justifyContent:'center',marginTop:'5%'}} >New password</Typography>
            <TextField type="password" sx={{ width: '10rem', display: 'flex', ml: '5px',margin:'auto'}} value={password} onChange={event => setPassword(event.target.value)} variant="outlined"  /> 
            
            <Typography sx={{fontWeight:500,fontSize:'medium',display:'flex',justifyContent:'center',marginTop:'5%'}} >Confirm password</Typography>
            <TextField error={passwordError} sx={{ width: '10rem', display: 'flex', ml: '5px',margin:'auto'}} value={cpassword} onChange={event => setCPassword(event.target.value)}  variant="outlined"  />
              <Button variant="contained"  sx={{ display: 'flex', ml: '5px',margin:'auto',marginTop:'3rem'}} onClick={handleSend}>Submit</Button>
        </Card>
      
   
  )
}

export default ChangPassCard

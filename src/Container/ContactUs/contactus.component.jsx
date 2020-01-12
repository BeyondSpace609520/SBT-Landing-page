import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import CustomButton from '../../Components/Button/custom-button.component';

import './contactus.styles.scss';


export default function ContactUsSection() {  
    return (
        <div className="contact-us" id="ContactUs">
            <h1>Website Contact</h1>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} className='firstname'>
                    <TextField fullWidth label="First Name" variant="filled"  placeholder="First Name" />
                </Grid>
                <Grid item xs={12} sm={6} className='lastname'>
                    <TextField fullWidth label="Last Name" variant="filled" placeholder="Last Name" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth multiline rows='6' label="Message" variant="filled" placeholder="Message" />
                </Grid>
            </Grid>
            <CustomButton title='Submit' />
        </div>
    );
}

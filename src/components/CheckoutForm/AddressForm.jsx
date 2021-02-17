import React, { useState,useEffect } from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm , FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';

import {commerce} from '../../lib/commerce';

function AddressForm({checkoutToken}) {

    const methods = useForm();
    const [shippingCountries,setShippingCountries] = useState([]);
    const [shippingCountry,setShippingCountry] = useState('');
    const [shippingSubdvisions,setShippingSubdivisions]  = useState([]);
    const [shippingSubdvision,setShippingSubdivision]  = useState('');
    const [shippingOptions,setShippingOptions] = useState([]);
    const [shippingOption,setShippingOption] = useState("");
    
    const options = shippingOptions.map((sO)=>({id:sO.id,label:`${sO.description} - ${sO.price.formatted_with_symbol}`}));
    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }
    const fetchSubdivisions = async (countryCode)=>{
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }
    const fetchShippingOptions = async (checkoutTokenId,country, region=null)=>{
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region});
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    console.log(shippingOptions);
    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id);
    },[]);

    useEffect(()=>{
        if(shippingCountry) fetchSubdivisions(shippingCountry)
    },[shippingCountry]);

    useEffect(() => {
     if (shippingSubdvision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdvision);
    }, [shippingSubdvision]);

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address </Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required label='Firstname' name='firstname'/>
                        <FormInput required label='Lastname' name='lastname'/>
                        <FormInput required label='Address' name='address'/>
                        <FormInput required label='Email' name='email'/>
                        <FormInput required label='City' name='city'/>
                        <FormInput required label='ZIP/Postal Code' name='zip'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e)=> setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code,name])=>(
                                    {id:code,label:name}
                                )).map((item)=>(
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdvision} fullWidth onChange={(e)=> setShippingSubdivision(e.target.value)}>
                                {Object.entries(shippingSubdvisions).map(([code,name])=>(
                                    {id:code,label:name}
                                )).map((item)=>(
                                <MenuItem key={item.id} value={item.id}>
                                    {item.label}
                                </MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e)=>setShippingOption(e.target.value)}>
                                {options.map((option)=>(
                                    
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm

import React from 'react'
import { Box, Button, TextField, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Formik } from 'formik'
import * as yup from 'yup'
import Header from '../components/Header'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contactNumber: '',
  address1: '',
  address2: '',
}

const phoneNumRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const userSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Email is not valid').required('Required'),
  contactNumber: yup
    .string()
    .matches(phoneNumRegex, 'Phone number is not valid')
    .required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string().required('Required'),
})

export default function ProfileForm() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  function handleFormSubmit(values) {
    console.log(values)
  }

  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Create User"
        subtitle="Create a New User Profile"
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <form
              onSubmit={handleSubmit}
              action=""
              className="mt-6 flex flex-wrap items-center justify-between gap-6"
            >
              <TextField
                label="First Name"
                sx={{ flex: '1' }}
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <TextField
                label="Last Name"
                sx={{ flex: '1' }}
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                label="Email"
                fullWidth={true}
                variant="filled"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Contact Number"
                fullWidth={true}
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactNumber}
                name="contactNumber"
                error={!!touched.contactNumber && !!errors.contactNumber}
                helperText={touched.contactNumber && errors.contactNumber}
              />
              <TextField
                label="Address 1"
                fullWidth={true}
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
              />
              <TextField
                label="Address 2"
                fullWidth={true}
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ marginLeft: 'auto', color: colors.grey[100] }}
              >
                Create User
              </Button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

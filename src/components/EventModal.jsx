import React from 'react'
import {
  Box,
  Button,
  TextField,
  useTheme,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { tokens } from '../theme'
import { Formik } from 'formik'
import * as yup from 'yup'

import Header from './Header'

const initialValues = {
  title: '',
  start: '',
  end: '',
  allDay: false,
}

const userSchema = yup.object().shape({
  title: yup.string().required('Required'),
  start: yup.string().required('Required'),
  end: yup.string().required('Required'),
})

export default function EventModal() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  function handleFormSubmit(values) {
    console.log(values)
  }

  return (
    <div className="flex flex-col">
      <Header
        title="Create Event"
        subtitle=""
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
              className="flex flex-wrap items-center justify-between gap-3"
            >
              <TextField
                label="Event Name"
                sx={{ flex: '1' }}
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
              <TextField
                label="Start"
                sx={{ flex: '1' }}
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.start}
                name="start"
                error={!!touched.start && !!errors.start}
                helperText={touched.start && errors.start}
              />
              <TextField
                label="End"
                fullWidth={true}
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.end}
                name="end"
                error={!!touched.end && !!errors.end}
                helperText={touched.end && errors.end}
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      value={values.allDay}
                      name="allDay"
                      sx={{
                        '&.Mui-checked': {
                          color: colors.greenAccent[400],
                        },
                      }}
                    />
                  }
                  label="All Day"
                />
              </FormGroup>

              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ marginLeft: 'auto', color: colors.grey[100] }}
              >
                Create Event
              </Button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

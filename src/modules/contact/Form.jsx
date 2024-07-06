/* eslint-disable no-unused-vars */
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormHelperText from "@mui/material/FormHelperText";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "../../redux/contact/postSlice";
import { useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";

const schema = yup.object().shape({
  description: yup
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(255, "Description must not exceed 255 characters")
    .required("You must enter a description"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(255, "Name must not exceed 255 characters")
    .required("You must enter your name"),
  serviceType: yup.string().required("You must choose a service"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("You must enter your email"),
  phone: yup
    .number()
    .typeError("Phone number must be a number")
    .positive("Phone number must be positive")
    .integer("Phone number must be an integer")
    .required("You must add a phone number"),
  date: yup.date().required("You must add a date"),
});

const Form = () => {
  const methods = useForm({
    defaultValues: {
      description: "",
      name: "",
      serviceType: "",
      email: "",
      phone: "",
      date: null,
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, dirtyFields, errors },
  } = methods;

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state?.contact.isLoading);

  const debouncedSubmit = useCallback(
    (data) => {
      const timerId = setTimeout(async () => {
        try {
          await dispatch(postContact(data));
          reset();
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    },
    [dispatch, reset]
  );

  const onSubmit = (data) => {
    debouncedSubmit(data);
  };

  return (
    <div className="w-full flex flex-col gap-6 py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="Name"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              label="Phone"
              variant="outlined"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        <FormControl fullWidth error={!!errors.serviceType}>
          <InputLabel id="category-label">Service Required</InputLabel>
          <Controller
            name="serviceType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId="category-label"
                id="service"
                label="Service Required"
              >
                <MenuItem value={"Heart"}>Heart</MenuItem>
                <MenuItem value={"Dentist"}>Dentist</MenuItem>
                <MenuItem value={"OPD"}>OPD</MenuItem>
                <MenuItem value={"Medicine"}>Medicine</MenuItem>
                <MenuItem value={"Lab"}>Lab</MenuItem>
                <MenuItem value={"Stomach"}>Stomach</MenuItem>
              </Select>
            )}
          />
          {errors.serviceType && (
            <FormHelperText error>{errors.serviceType.message}</FormHelperText>
          )}
        </FormControl>

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Appointment Date"
                className="!w-full"
                {...field}
                minDate={dayjs()}
              />
            </LocalizationProvider>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />

        <div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!isValid}
            className="!py-3 !text-white h-12"
          >
            {isLoading ? (
              <CircularProgress className="!text-white" size={25} />
            ) : (
              "Add"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;

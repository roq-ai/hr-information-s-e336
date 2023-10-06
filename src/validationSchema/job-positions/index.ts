import * as yup from 'yup';

export const jobPositionsValidationSchema = yup.object().shape({
  job_description: yup.string().nullable(),
  salary_range: yup.string().nullable(),
  required_experience: yup.string().nullable(),
  job_requirements: yup.string().nullable(),
});

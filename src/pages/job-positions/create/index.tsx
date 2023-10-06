import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createJobPositions } from 'apiSdk/job-positions';
import { jobPositionsValidationSchema } from 'validationSchema/job-positions';
import { JobPositionsInterface } from 'interfaces/job-positions';

function JobPositionsCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: JobPositionsInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createJobPositions(values);
      resetForm();
      router.push('/job-positions');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<JobPositionsInterface>({
    initialValues: {
      job_description: '',
      salary_range: '',
      required_experience: '',
      job_requirements: '',
    },
    validationSchema: jobPositionsValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Job Positions',
              link: '/job-positions',
            },
            {
              label: 'Create Job Positions',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Job Positions
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.job_description}
            label={'Job Description'}
            props={{
              name: 'job_description',
              placeholder: 'Job Description',
              value: formik.values?.job_description,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.salary_range}
            label={'Salary Range'}
            props={{
              name: 'salary_range',
              placeholder: 'Salary Range',
              value: formik.values?.salary_range,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.required_experience}
            label={'Required Experience'}
            props={{
              name: 'required_experience',
              placeholder: 'Required Experience',
              value: formik.values?.required_experience,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.job_requirements}
            label={'Job Requirements'}
            props={{
              name: 'job_requirements',
              placeholder: 'Job Requirements',
              value: formik.values?.job_requirements,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/job-positions')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'job_positions',
    operation: AccessOperationEnum.CREATE,
  }),
)(JobPositionsCreatePage);

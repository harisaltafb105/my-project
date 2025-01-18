import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'k3a632vm', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'skGjm3QG6or29RGYeHH6TGO10B5yDe1F3ud3mnzUGzyv99S5jjnRw8VdMXw2fshIX9POqZqxM17BnFMPAf56jOb7HKjUUQeiP8CujCDZ7f5snZeLOfRNmwtp1YgYZbtlJI1KR8bI2kFNSbtprtg9cLOG10OpI8MvWUZ29qFgAnFLNxI3eOrh', // Replace with your Sanity API token
});


export default client;

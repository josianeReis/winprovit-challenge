export const formatAddress = ({ street, suite, zipcode, city }: any) => {
  return `${street}, ${suite} - ${zipcode} ${city}`;
}
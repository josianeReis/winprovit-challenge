import { formatAddress } from '../utils/formatAddress.util'

export const formatUsersWithPosts = (users: any, posts: any): any => {
  const usersData: any = [];
  if (users && posts) {
    users.forEach((user: any) => {
      usersData.push({
        ...user,
        address: formatAddress(user.address),
        company: user.company.name,
        posts: posts
        .filter((post: any) => post.userId === user.id)
        .map((el: any) => (({ userId, ...o }) => o)(el)),
      });
    })
  }

  return usersData;
}

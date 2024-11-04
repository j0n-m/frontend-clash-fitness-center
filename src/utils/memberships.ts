export type MembershipType = {
  price: number;
  label: string;
  description: string[];
  id: number;
};

const memberships: MembershipType[] = [
  {
    price: 29.99,
    id: 1,
    label: "Basic",
    description: [
      "Unlimited club visits",
      "Access to all new equipment",
      "Unlimited fitness classes",
      "Use of locker rooms & sauna",
      "Access to basketball & volleyball courts",
      "Free complementary gym bag",
    ],
  },
  {
    price: 39.99,
    id: 2,
    label: "Classic",
    description: [
      "Everything from Basic Tier",
      "Visit any Clash fitness center in the state",
      "Access to the pool area",
      "May bring 1 guest per visit",
    ],
  },
  {
    price: 59.99,
    id: 3,
    label: "Premier",
    description: [
      "Everything from Classic Tier",
      "Visit any Clash fitness Nationwide",
      "May bring 2 guest per visit",
    ],
  },
];

export default memberships;

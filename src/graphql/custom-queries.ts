export const getLastActive = `query GetLastActive($id: ID!) {
  getLastActive(id: $id) {
    id
    user {
      id
      onboarding {
        lastActive
      }
    }
  }
}`;

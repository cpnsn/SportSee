import { mockData } from "../data/mockData";

const USE_MOCK = false;

export const fetchUserData = async (userId) => {
  if (USE_MOCK) {
    const user = mockData.USER_MAIN_DATA.find((user) => user.id == userId);
    return { data: user };
  } else {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user ${userId}`);
    }
    return await response.json();
  }
};

export const fetchActivityData = async (userId) => {
  if (USE_MOCK) {
    const activity = mockData.USER_ACTIVITY.find(
      (activity) => activity.userId == userId
    );
    return { data: activity };
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch activity data for user ${userId}`);
    }
    return await response.json();
  }
};

export const fetchAverageSessionsData = async (userId) => {
  if (USE_MOCK) {
    const averageSession = mockData.USER_AVERAGE_SESSIONS.find(
      (session) => session.userId == userId
    );
    return { data: averageSession };
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch average session data for user ${userId}`
      );
    }
    return await response.json();
  }
};

export const fetchPerformanceData = async (userId) => {
  if (USE_MOCK) {
    const performance = mockData.USER_PERFORMANCE.find(
      (performance) => performance.userId == userId
    );
    return { data: performance };
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch performance data for user ${userId}`);
    }
    return await response.json();
  }
};

export const fetchAllUserData = async (userId) => {
  const user = await fetchUserData(userId);
  const activity = await fetchActivityData(userId);
  const averageSessions = await fetchAverageSessionsData(userId);
  const performance = await fetchPerformanceData(userId);

  return { user, activity, averageSessions, performance };
};

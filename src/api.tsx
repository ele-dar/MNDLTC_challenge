import data from "./data/data.json";

const mockFetch = (url: string) => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate different responses based on the URL
      if (url === "/api/data") {
        resolve({
          status: 200,
          json: () =>
            Promise.resolve({
              data,
            }),
        });
      } else {
        reject(new Error("Not Found"));
      }
    }, 2000);
  });
};

export default mockFetch;

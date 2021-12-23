

export const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return false;
    }
    return await res.json();
  } catch (error) {
    return false;
  }
};

import axios from "axios";

export const LoadOrders = async (url: any) => {
  try {
    const response = await axios.get(url.queryKey[0]);
    return response.data;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const LoadOrderDetails = async (id: string) => {
  try {
    const response = await axios.get(`/api/orders/order/${id}`);
    return response.data;
  } catch (error: any) {
    throw Error(error.message);
  }
};

export const MarkOrderAsDelivered = async (id: any) => {
  try {
    const response = await axios.put(`/api/orders/order/${id}`, {
      isDelivered: true,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
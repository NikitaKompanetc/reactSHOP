import axios from 'axios';

// function OrderErrorHandle(id, metadata) {
//     switch (id) {
//       case "VolumeLessLimit":
//         return window._localizer[`Order_${id}`].replace("{0}", metadata.limit).replace("{1}", metadata.currency);
//       default:
//         return window._localizer[`Order_${id}`];
//     }
//   }
  
  
//   function errorHandler(err) {
//     if (err.response.status === 400 && err.response.data) {
  
//       const obj = JSON.parse(err.response.data.message);
  
//       if (obj.message_id) {
//         window.notify({ message: OrderErrorHandle(obj.message_id, obj.metadata), level: 'warning' });
//         throw err;
//       }
  
//       window.notify({ message: err.response.data.message, level: 'warning' });
//     } else if (err.response.status === 401) {
//       window.notify({ message: 'You should be authenticated.', level: 'error' });
//     } else {
//       window.notify({ message: err.response.statusText, level: 'error' });
//     }
//     throw err;
//   }

// const rtoken = document.querySelector("#__AjaxAntiForgeryForm input[name='__RequestVerificationToken']").value;

export default {
  get: (url, options) => axios.get(url, options).then(({ data }) =>  data),
  post: (url, options) => axios.post(url, options).then(({ data }) => data),
//   postwtoken: (url, options) => {
//     axios.defaults.headers.common["XSRF-TOKEN"] = rtoken;
//     return axios.post(url, options).then(({ data }) => data).catch(errorHandler)
//   },
//   delete: url => axios.delete(url).catch(errorHandler)
};

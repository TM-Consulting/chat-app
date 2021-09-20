const baseURL = "https://images.unsplash.com/photo-1510130146128-7a7b6afb6f9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
const minifyParams = "&fm=webp&fit=crop&w=50&q=50&blur=50"
const optimizedParams = "&fm=webp&w=1200&fit=crop&q=75"

export const asideImageProps = {
  imageURL: baseURL + optimizedParams,
  blurURL: baseURL + minifyParams,
  alt: "Chat illustration - by Volodymyr Hryshchenko on Unsplash"
};

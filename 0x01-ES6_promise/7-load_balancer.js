export default function loadBalancer(chinaDownLoad, USDownload) {
  return Promise
    .race([chinaDownLoad, USDownload])
    .then((res) => res);
}

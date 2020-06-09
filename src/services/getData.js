export default {
  async getData (url) {
    const data = await fetch(url).then(resp => resp.json())
    return data
  }
}

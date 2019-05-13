const filteredItems = arr => {
  return arr.filter((item, pos) => {
    return arr.indexOf(item)== pos
  })
}

export { filteredItems }
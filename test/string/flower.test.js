import flower from '../../code/string/flower'

test("[1,0,0,0,1],1", () => {
  expect( flower([1,0,0,0,1],1) ).toBe(true)
})
test("[1,0,0,0,1],2", () => {
    expect( flower([1,0,0,0,1],2) ).toBe(false)
  })
test("[1,0,0,0,0],2", () => {
    expect( flower([1,0,0,0,0],2) ).toBe(true)
})
test("[1,0,0,0,0],2", () => {
    expect( flower([1,0,0,0,0],3) ).toBe(false)
})
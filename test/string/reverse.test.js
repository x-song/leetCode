import reverse from '../../code/string/reverse'

test("reverse:Let's take LeetCode contest", () => {
  expect( reverse("Let's take LeetCode contest") ).toBe("s'teL ekat edoCteeL tsetnoc")
})

test("abcd", () => {
  expect( reverse("abcd") ).toBe("dcba")
})
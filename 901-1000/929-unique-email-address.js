var numUniqueEmails = function (emails) {
  const set = new Set();

  for (const email of emails) {
    const arr = email.split("@");

    // ignore everything after first occurence of +
    arr[0] = (arr[0].split("+"))[0]; 

    // replace all dots with nothing i.e. empty string
    arr[0] = arr[0].replace(/\./g, "");

    // add final email ( processed ) to set
    set.add(arr.join("@"));
  }

  return set.size;
};
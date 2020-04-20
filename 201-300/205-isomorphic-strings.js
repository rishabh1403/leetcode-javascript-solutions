var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapa = new Map();
  const mapb = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapa.has(s[i])) {
      if (mapa.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      mapa.set(s[i], t[i])
    }

    if (mapb.has(t[i])) {
      if (mapb.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      mapb.set(t[i], s[i])
    }
  }

  return true

};
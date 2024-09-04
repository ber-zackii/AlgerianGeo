# 🇩🇿 AlgerianGeo

**AlgerianGeo** is a JavaScript module designed to provide and manage data for Algerian Wilayas and Communes. It offers various utilities to access geographic and administrative information.

## ✨ Features:
- Retrieve Wilaya and Commune data
- Access information by ID, code, or postal code
- Search and filter data by attributes

## 🚀 Usage:

1. **Install the Package**:

   ```bash
   npm install algerian-geo


2. **Import and Use**:
 <br>
const AlgerianGeo = require('algerian-geo');<br>
const var = AlgerianGeo.[function];<br/>
</br>

## 🛠️ Functions:

- **`getWilayaById(id)`**: Returns the Wilaya object for the given ID.
- **`getCommuneById(id)`**: Returns the Commune object for the given ID.
- **`getCommunesByWilaya(wilayaId)`**: Returns an array of Commune objects for the given Wilaya ID.
- **`getWilayaByCode(code)`**: Returns the Wilaya object for the given code.
- **`getCommunesByWilayaCode(code)`**: Returns an array of Commune objects for the given Wilaya code.
- **`getAllWilayas()`**: Returns an array of all Wilayas.
- **`getAllCommunes()`**: Returns an array of all Communes.
- **`getCommunesByName(name)`**: Returns an array of Commune objects whose name contains the given string.
- **`getWilayasByName(name)`**: Returns an array of Wilaya objects whose name contains the given string.
- **`getCommuneByPostCode(postCode)`**: Returns the Commune object for the given postal code.
- **`getWilayaByPostCode(postCode)`**: Returns the Wilaya object for the postal code associated with the given postal code.
- **`getCommunesByPostCodeRange(postCodePrefix)`**: Returns an array of Commune objects whose postal code starts with the given prefix.
- **`getWilayaNameByPostCode(postCode)`**: Returns the name of the Wilaya for the given postal code.


## 🛠️ Technologies Used:
- **JavaScript**: For functionality and data handling.
- **Node.js**: For the runtime environment.

## 🤝 Contributing:
Contributions are welcome! Open an issue or submit a pull request on our GitHub repository.

**Note**: Some of the data of wilaya was sourced from a friend. Special thanks to them for their contribution.









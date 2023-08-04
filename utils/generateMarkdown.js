// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  let licenseURL = ""
  // switch's are used to ensure the links and colors for the badges are different and correct
  // since the user has a drop down menu to choose from
  switch (license) {
    case "Apache License 2.0": licenseURL += '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`'; break;
    case "BSD 2-clause license": licenseURL +='![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'; break;
    case 'BSD 3-clause "New" or "Revised" license': licenseURL += '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'; break;
    case 'Boost Software License 1.0': licenseURL += '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'; break;
    case 'Creative Commons Zero v1.0 Universal': licenseURL += '![License](https://licensebuttons.net/l/zero/1.0/80x15.png)'; break;
    case 'Eclipse Public License 2.0': licenseURL += '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'; break;
    case 'GNU Affero General Public License v3.0': licenseURL += '![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)'; break;
    case 'GNU General Public License v2.0': licenseURL += '![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)'; break;
    case 'GNU General Public License v3.0': licenseURL += '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)'; break;
    case 'GNU Lesser General Public License v2.1': licenseURL += '![License](https://img.shields.io/badge/License-LGPLv2.1-blue.svg)'; break;
    case 'MIT License': licenseURL += '![License](https://img.shields.io/badge/License-MIT-yellow.svg)'; break;
    case 'Mozilla Public License 2.0': licenseURL += '![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'; break;
    case 'The Unlicense': licenseURL += '![License](https://img.shields.io/badge/license-Unlicense-blue.svg)'; break;
    default: licenseURL += ""; break;
  }
  return licenseURL
}

//Creates a function that returns the license link
//If there is no license, return an empty string
const renderLicenseLink = license => {
  let licenseURL = ""
  // switch's are used to ensure the links and colors for the badges are different and correct
  // since the user has a drop down menu to choose from
  switch (license) {
    case "Apache License 2.0": licenseURL += '(https://opensource.org/licenses/Apache-2.0)'; break;
    case "BSD 2-clause license": licenseURL +='(https://opensource.org/licenses/Apache-2.0)'; break;
    case 'BSD 3-clause "New" or "Revised" license': licenseURL += '(https://opensource.org/licenses/BSD-3-Clause)'; break;
    case 'Boost Software License 1.0': licenseURL += '(https://www.boost.org/LICENSE_1_0.txt)'; break;
    case 'Creative Commons Zero v1.0 Universal': licenseURL += '(http://creativecommons.org/publicdomain/zero/1.0/)'; break;
    case 'Eclipse Public License 2.0': licenseURL += '(https://opensource.org/licenses/EPL-1.0)'; break;
    case 'GNU Affero General Public License v3.0': licenseURL += '(https://www.gnu.org/licenses/agpl-3.0.en.html#license-text)';break;
    case 'GNU General Public License v2.0': licenseURL += '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';break;
    case 'GNU General Public License v3.0': licenseURL += '(https://www.gnu.org/licenses/gpl-3.0)';break;
    case 'GNU Lesser General Public License v2.1': licenseURL += '(https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)';break;
    case 'MIT License': licenseURL += '(https://opensource.org/licenses/MIT)';break;
    case 'Mozilla Public License 2.0': licenseURL += '(https://opensource.org/licenses/MPL-2.0)';break;
    case 'The Unlicense': licenseURL += '(http://unlicense.org/)';break;
    default: licenseURL += ""; break;
  }
  return licenseURL
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === 'undefined') {
    return ""
  } else {
    return `## License
    
  This application is covered under the ${license} license.
  [License URL]${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributions](#contributions)

  * [Testing](#testing)

  * [Questions](#questions)

  ## Installation

  To install the program, run the following command:

  ${data.installInstructions}


  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}


  ## Contributions

  ${data.credit}

  ## Testing
  To test the app, run the following command:
  
  ${data.tests}

  ## Application URL
  [Link to application URL](${data.URL})

  ## Questions

  View more of my work at
  [https://github.com/${data.username}](https://github.com/${data.username}/)

  Email me with any questions at
  ${data.email}
  
  `;
}

module.exports = generateMarkdown;

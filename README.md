## Getting Started

We have been running this project in VSCode, using npm

First, install the required node_modules:

```bash
npm install
```

Then to run the project:
```bash
cd capybara
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the Product

This project is used to recommend surgical options for hip fractures.

By filling out all the given fields, then pressing calculate sttgma, you can get a score and a risk level to determine a patient's mortality risk. 

Then, you can upload an x-ray of the fracture and identify some specifics about the type of fracture. Based on those specifics and the risk score calculate above, the application recommends a procedure(s) in green.

This is the source of the data: [STTGMA Website](https://sttgmacom.wordpress.com/score-calculator/ais/)
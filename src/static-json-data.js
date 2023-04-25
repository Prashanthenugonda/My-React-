/**
 * BELOW DATA IS EXPECTED JSON OBJECT FROM API SERVICES.
 */
const dataObj = {
  projects: [
    {
      name: "Williams project",
      id: "1",
      description: "CATALOG PROJECT ASSEMBLIES",
      UOM: "",
      Structures: [
        {
          name: "STR-4",
          qty: "",
          type: "",
          description: "",
          Assemblyes: [
            {
              name: "ASY-PP-34",
              qty: "4",
              description: "",
              Parts: [{ name: "0000456003", qty: "2" }],
            },
            {
              name: "ASY-PP-35",
              qty: "6",
              description: "",
              Parts: [{ name: "0000450903", qty: "2" }],
            },
            {
              name: "ASY-PP-36",
              qty: "6",
              description: "",
              Parts: [{ name: "0009086003", qty: "2" }],
            },
            {
              name: "ASY-PP-37",
              qty: "1",
              description: "",
              Parts: [{ name: "0898456003", qty: "2" }],
            },
          ],
        },
        {
          name: "STR-7",
          qty: "",
          type: "",
          description: "",
          Assemblyes: [
            {
              name: "ASY-34",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [],
            },
            {
              name: "ASY-35",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [{ name: "0000456003", qty: "2" }],
            },
            {
              name: "ASY-36",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [
                { name: "0000456003", qty: "2" },
                { name: "0000456993", qty: "2" },
              ],
            },
          ],
        },
        {
          name: "STR-5",
          qty: "",
          type: "",
          description: "",
          Assemblyes: [
            {
              name: "ASY-RR-20",
              qty: "4",
              description: "",
              type: "assembly",
              Parts: [
                { name: "0000456003", qty: "2" },
                { name: "0000456003", qty: "2" },
              ],
            },
            {
              name: "ASY-RR-21",
              qty: "2",
              description: "",
              type: "assembly",
              Parts: [
                { name: "0000456803", qty: "2" },
                { name: "0070456003", qty: "23" },
              ],
            },
            {
              name: "ASY-RR-23",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [{ name: "0089456003", qty: "22" }],
            },
          ],
        },
        {
          name: "STR-3",
          qty: "",
          type: "",
          description: "",
          Assemblyes: [
            {
              name: "ASY-OO-8",
              qty: "4",
              description: "",
              type: "assembly",
              Parts: [{ name: "0009456003", qty: "1" }],
            },
            {
              name: "ASY-OO-28",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [{ name: "0000458003", qty: "52" }],
            },
            {
              name: "ASY-OO-68",
              qty: "4",
              description: "",
              type: "assembly",
              Parts: [
                { name: "0000956003", qty: "2" },
                { name: "0000456673", qty: "2" },
              ],
            },
            {
              name: "ASY-OO-18",
              qty: "6",
              description: "",
              type: "assembly",
              Parts: [],
            },
          ],
        },
        {
          name: "STR-2",
          qty: "",
          type: "",
          description: "",
          Assemblyes: [
            {
              name: "ASY-34",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [{ name: "0000909003", qty: "92" }],
            },
            {
              name: "ASY-35",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [{ name: "0000787803", qty: "42" }],
            },
            {
              name: "ASY-36",
              qty: "1",
              description: "",
              type: "assembly",
              Parts: [],
            },
          ],
        },
      ],
    },
  ],
};

export default dataObj;

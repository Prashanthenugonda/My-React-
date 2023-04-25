import react, { useEffect, useState } from "react";
import "./projectDetails.css";
import staticData from "../static-json-data";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    let data = Array.from(JSON.parse(JSON.stringify(staticData.projects)));
    setProject([...data]);
  }, []);

  const Hidelevel2 = () => {
    let data = Array.from(project);
    data
      .find((p) => p.id == 1)
      ?.Structures.forEach((element) => {
        element.Assemblyes = [];
      });
    setProject([...data]);
  };
  const Hidelevel3 = () => {
    let proj = Array.from(project);
    proj
      .find((p) => p.id == 1)
      ?.Structures.forEach((element) => {
        (element.Assemblyes || []).forEach((asy) => {
          asy.Parts = [];
        });
      });
    setProject([...proj]);
  };

  const HandleStructure = () => {
    let name = prompt();
    let proj = project;
    name &&
      proj
        .find((p) => p.id == 1)
        .Structures.push({ name: name.toUpperCase().trim(), qty: "", Assemblyes: [] });
    setProject([...proj]);
  };

  const HandleAssembly = () => {
    let strucName = prompt("Enter structure name");
    let structure =
      strucName &&
      project
        .find((p) => p.id == 1)
        ?.Structures.find((s) => s.name == strucName.toUpperCase().trim());

    structure == undefined ? alert("Invalid structure!") : void 0;

    let assembly = structure && prompt("Enter assembly name");
    assembly &&
      project
        .find((p) => p.id == 1)
        ?.Structures.find((s) => s.name == strucName.toUpperCase().trim())
        .Assemblyes.push({ name: assembly.toUpperCase().trim(), qty: "", id: "443", Parts: [] });
    setProject([...project]);
  };
  const Reset = () => {
    window.location.reload();
  };

  return (
    <div style={{ float: "left" }} className="treeConetentOverflow">
      <button onClick={Hidelevel2}>Hide level2</button>
      <button onClick={Hidelevel3}>Hide level3</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={HandleStructure}>Add structure</button>
      <button onClick={HandleAssembly}>Add Assembly</button>
      {(project || []).map((proj) => (
        <div className="">
          <span>{proj.name}</span>
          {proj.Structures?.map((struc) => (
            <div>
              <span>{struc?.name}</span>
              <div style={{ marginLeft: "75px" }}>
                {struc?.Assemblyes?.map((assy) => (
                  <div>
                    <span>{assy.name}</span>
                    {assy?.Parts?.map((p) => (
                      <div style={{ marginLeft: "75px" }}>
                        <span>{p.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ProjectDetails;

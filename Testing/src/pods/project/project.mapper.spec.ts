import { mapProjectFromApiToVm } from "./project.mapper";
import * as viewModel from "./project.vm";

describe("Project Mapper Tests", () => {
  describe("mapProjectFromApiToVm", () => {
    it("should map project with employees", () => {
      const apiProject = {
        id: "1",
        name: "Test Project",
        employees: [
          { id: "e1", employeeName: "Employee 1" },
          { id: "e2", employeeName: "Employee 2" },
        ],
        isActive: true,
      };
      const expectedVmProject = {
        id: "1",
        name: "Test Project",
        employees: [
          { id: "e1", employeeName: "Employee 1" },
          { id: "e2", employeeName: "Employee 2" },
        ],
        isActive: true,
      };

      const result = mapProjectFromApiToVm(apiProject);
      expect(result).toStrictEqual(expectedVmProject);
    });


    it("should return empty project when api project is undefined", () => {
      const apiProject = undefined;
      const expectedVmProject = viewModel.createEmptyProject();
      const result = mapProjectFromApiToVm(apiProject);
      expect(result).toStrictEqual(expectedVmProject);
    });


    it("should return empty project when api project is null", () => {
      const apiProject = null;
      const expectedVmProject = viewModel.createEmptyProject();
      const result = mapProjectFromApiToVm(apiProject);
      expect(result).toStrictEqual(expectedVmProject);
    });

    it("should call createEmptyProject when api project is falsy", () => {
      const apiProject = null;
      vi.spyOn(viewModel, "createEmptyProject");

      mapProjectFromApiToVm(apiProject);

      expect(viewModel.createEmptyProject).toHaveBeenCalled();
    });
  });
});

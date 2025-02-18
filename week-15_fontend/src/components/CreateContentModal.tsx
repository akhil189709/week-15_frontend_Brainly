import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";

export const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-80 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className=" bg-white opacity-100 p-10 rounded-lg">
              <div className="flex justify-end">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input placeholder={"enter the content"} />
                <Input placeholder={"enter the link"} />
                <Input placeholder={"enter the title"} />
                <div className="flex justify-center mt-4 pr-2 pl-2 items-center">
                  <Button variant="primary" text="Submit" />
                </div>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

function Input({ onChange, placeholder }: { onChange: () => VoidFunction }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 mb-3rounded-lg m-3"
        onChange={onChange}
      />
    </div>
  );
}

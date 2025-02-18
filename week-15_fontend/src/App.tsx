import { Button } from "./components/Button";
import { PlusIcon } from "./Icons/PlusIcon";
import { ShareIcon } from "./Icons/ShareIcon";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { useState } from "react";

const App = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="p-4">
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <div className="flex justify-end gap-4">
        <Button
          onClick={() => {
            setModalOpen(true)
        }}
          variant="primary"
          text="Add content"
          startIcon={<PlusIcon />}
        ></Button>
        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon />}
        ></Button>
      </div>
      <div className="flex gap-5">
        <Card
          type="tweeter"
          link="https://x.com/kirat_tw/status/1891266960903622997"
          title="first tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=sYy70MrFU2U"
          title="first video"
        />
      </div>
    </div>
  );
};

export default App;

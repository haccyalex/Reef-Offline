const base = Process.getModuleByName("Boom Beach").base;
const LogicDefines_OFFLINE_MODE = 0x33CD2D;
const TestName = 0x2971BB;
base.add(LogicDefines_OFFLINE_MODE).writeU8(1);
Memory.protect(base.add(TestName), 128, "rwx");
base.add(TestName).writeUtf8String("haccyalex");

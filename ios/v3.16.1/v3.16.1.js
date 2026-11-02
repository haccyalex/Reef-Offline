const base = Process.getModuleByName("Boom Beach").base;
const LogicDefines_OFFLINE_MODE = 0x335915;
const TestName = 0x28E378;
base.add(LogicDefines_OFFLINE_MODE).writeU8(1);
Memory.protect(base.add(TestName), 128, "rwx");
base.add(TestName).writeUtf8String("haccyalex");

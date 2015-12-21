//
//  Resources.h
//
//
//  Created by 张仲昊 on 15/12/21.
//
//

#ifndef ____Resources__
#define ____Resources__

#include "cocos2d.h"

using namespace cocos2d;

class Resources : public Ref {
public:
    
    //There is problem, it should be fixed in future.Don't use the enum class it will cause don't have any addition!
    enum EnumTeacherTestType
    {
        en_Teacher_Test,
    };
    
    enum EnumAllTestType
    {
        en_All_Test,
    };
    
    void ChooseTeacherTest(EnumTeacherTestType enScenType);
    
    void ChooseAllTest(EnumAllTestType enScenType);
    
private:
    
    void CheckTest();
};

#endif

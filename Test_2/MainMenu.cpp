//
//  MainMenu.cpp
//  HomeWork
//
//  Created by 张仲昊 on 15/12/21.
//
//

#include "MainMenu.h"
#include "cocostudio/CocoStudio.h"
#include "ui/CocosGUI.h"
#include "SceneManager.h"

USING_NS_CC;

using namespace cocostudio::timeline;

Scene* MainMenu::createScene()
{
    // 'scene' is an autorelease object
    auto scene = Scene::create();
    
    // 'layer' is an autorelease object
    auto layer = MainMenu::create();
    
    // add layer as a child to scene
    scene->addChild(layer);
    
    
    // return the scene
    return scene;
}

// on "init" you need to initialize your instance
bool MainMenu::init()
{
    //////////////////////////////
    // 1. super init first
    if ( !Layer::init() )
    {
        return false;
    }
    
    auto rootNode = CSLoader::createNode("MainScene.csb");
    auto MainMenuButtonLayer_1_Node = CSLoader::createNode("MainMenuButtonLayer_1.csb");
    auto MainMenuButtonLayer_2_Node = CSLoader::createNode("MainMenuButtonLayer_2.csb");
    rootNode->addChild(MainMenuButtonLayer_1_Node);
    rootNode->addChild(MainMenuButtonLayer_2_Node);
    
    //Make the Choose Layer unvisible
    MainMenuButtonLayer_2_Node->setVisible(false);
    addChild(rootNode);
    
    //The Button of MainMenuButtonLayer_1_Node
    cocos2d::ui::Button* DengLuBtn = (cocos2d::ui::Button*)MainMenuButtonLayer_1_Node->getChildByName("DengLuBtn");
    cocos2d::ui::Button* TuiChuBtn = (cocos2d::ui::Button*)MainMenuButtonLayer_1_Node->getChildByName("TuiChuBtn");
    DengLuBtn->addTouchEventListener([=](Ref* pSender,cocos2d::ui::Widget::TouchEventType type) {
        switch(type) {
            case cocos2d::ui::Widget::TouchEventType::BEGAN:
                break;
            case cocos2d::ui::Widget::TouchEventType::MOVED:
                break;
            case cocos2d::ui::Widget::TouchEventType::ENDED:
                MainMenuButtonLayer_1_Node->setVisible(false);
                MainMenuButtonLayer_2_Node->setVisible(true);
                break;
            case cocos2d::ui::Widget::TouchEventType::CANCELED:
                break;
            default:
                break;
        }
    });
    TuiChuBtn->addTouchEventListener([=](Ref* pSender,cocos2d::ui::Widget::TouchEventType type) {
        switch(type) {
            case cocos2d::ui::Widget::TouchEventType::BEGAN:
                break;
            case cocos2d::ui::Widget::TouchEventType::MOVED:
                break;
            case cocos2d::ui::Widget::TouchEventType::ENDED:
                exit(0);
                break;
            case cocos2d::ui::Widget::TouchEventType::CANCELED:
                break;
            default:
                break;
        }
    });
    
    //The Button of MainMenuButtonLayer_2_Node
    cocos2d::ui::Button* StudentBtn = (cocos2d::ui::Button*)MainMenuButtonLayer_2_Node->getChildByName("StudentBtn");
    cocos2d::ui::Button* TeacherBtn = (cocos2d::ui::Button*)MainMenuButtonLayer_2_Node->getChildByName("TeacherBtn");
    
    StudentBtn->addTouchEventListener([=](Ref* pSender,cocos2d::ui::Widget::TouchEventType type) {
        switch(type) {
            case cocos2d::ui::Widget::TouchEventType::BEGAN:
                break;
            case cocos2d::ui::Widget::TouchEventType::MOVED:
                break;
            case cocos2d::ui::Widget::TouchEventType::ENDED:
                SceneManager::sharedSceneManager()->changeScene(SceneManager::en_MainMenu);
                break;
            case cocos2d::ui::Widget::TouchEventType::CANCELED:
                break;
            default:
                break;
        }
    });
    TeacherBtn->addTouchEventListener([=](Ref* pSender,cocos2d::ui::Widget::TouchEventType type) {
        switch(type) {
            case cocos2d::ui::Widget::TouchEventType::BEGAN:
                break;
            case cocos2d::ui::Widget::TouchEventType::MOVED:
                break;
            case cocos2d::ui::Widget::TouchEventType::ENDED:
                SceneManager::sharedSceneManager()->changeScene(SceneManager::en_MainMenu);
                break;
            case cocos2d::ui::Widget::TouchEventType::CANCELED:
                break;
            default:
                break;
        }
    });
    return true;
}

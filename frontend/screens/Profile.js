import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import placeholderAvatarImage from '../assets/KnitsLogo.png';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={placeholderAvatarImage} style={{ width: 64, height: 64, marginRight: 8 }} />
          <Text style={{ fontSize: 18, fontWeight: '500' }}>Daniel Ung</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, marginRight: 8 }}>9+</Text>
          <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginRight: 8 }}>
            <Text style={{ color: '#ffffff' }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#ffffff' }}>...</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 16 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>2</Text>
          <Text style={{ fontSize: 16, opacity: 0.5 }}>posts</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>575</Text>
          <Text style={{ fontSize: 16, opacity: 0.5 }}>followers</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>647</Text>
          <Text style={{ fontSize: 16, opacity: 0.5 }}>following</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 16 }}>
        <Text style={{ fontSize: 16, opacity: 0.5 }}>@sjsu comp sci 26</Text>
        <Text style={{ fontSize: 16, opacity: 0.5, marginLeft: 16 }}>bento.me/danielung</Text>
      </View>

      {/* Accordion Component */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <TouchableOpacity style={{ backgroundColor: '#f0f0f0', borderRadius: 8, padding: 16 }}>
          <Text>Dashboard</Text>
          <Text style={{ opacity: 0.5 }}>Audience insights, inspiration and tools.</Text>
        </TouchableOpacity>
      </View>

      {/* Edit and Share Buttons */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 8, padding: 16 }}>
          <Text style={{ color: '#ffffff' }}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 8, padding: 16 }}>
          <Text style={{ color: '#ffffff' }}>Share profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#ffffff' }}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Icon Buttons */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#ffffff' }}>Grid Icon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#ffffff' }}>Play Icon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#3366ff', borderRadius: 25, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#ffffff' }}>Camera Icon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

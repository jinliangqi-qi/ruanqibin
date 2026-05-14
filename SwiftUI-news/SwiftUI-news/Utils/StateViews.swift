//
//  StateViews.swift
//  SwiftUI-news
//
//  统一状态视图组件

import SwiftUI

struct LoadingStateView: View {
    var message: String = "加载中..."
    
    var body: some View {
        VStack(spacing: AppSpacing.md) {
            ProgressView()
                .scaleEffect(1.2)
            Text(message)
                .font(.subheadline)
                .foregroundColor(.secondaryText)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
    }
}

struct ErrorStateView: View {
    let message: String
    var retryAction: (() -> Void)?
    
    var body: some View {
        VStack(spacing: AppSpacing.md) {
            Image(systemName: "exclamationmark.triangle")
                .font(.largeTitle)
                .foregroundColor(.orange)
            Text(message)
                .font(.subheadline)
                .foregroundColor(.secondaryText)
                .multilineTextAlignment(.center)
            if let retry = retryAction {
                Button(action: retry) {
                    Label("重试", systemImage: "arrow.clockwise")
                        .font(.subheadline)
                }
                .buttonStyle(.bordered)
                .tint(.blue)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
    }
}

struct EmptyStateView: View {
    var icon: String = "tray"
    var title: String = "暂无内容"
    var message: String = ""
    var actionLabel: String?
    var action: (() -> Void)?
    
    var body: some View {
        VStack(spacing: AppSpacing.md) {
            Image(systemName: icon)
                .font(.system(size: 40))
                .foregroundColor(.platformGray3)
            Text(title)
                .font(.headline)
                .foregroundColor(.secondaryText)
            if !message.isEmpty {
                Text(message)
                    .font(.subheadline)
                    .foregroundColor(.tertiaryLabel)
                    .multilineTextAlignment(.center)
            }
            if let label = actionLabel, let act = action {
                Button(action: act) {
                    Label(label, systemImage: "arrow.clockwise")
                        .font(.subheadline)
                }
                .buttonStyle(.bordered)
                .tint(.blue)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
    }
}
